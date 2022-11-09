import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";

export enum ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum {
    Any = "Any"
,    Single = "Single"
}


// ObWriteDomesticConsent4DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteDomesticConsent4DataAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;

  @Metadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteDomesticConsent4DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteDomesticConsent4DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticConsent4DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticConsent4DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticConsent4DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteDomesticConsent4DataInitiationInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticConsent4DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteDomesticConsent4DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteDomesticConsent4DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
export class ObWriteDomesticConsent4DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticConsent4DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=CreditorPostalAddress" })
  creditorPostalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticConsent4DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteDomesticConsent4DataInitiationInstructedAmount;

  @Metadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @Metadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @Metadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteDomesticConsent4DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticConsent4DataReadRefundAccountEnum {
    No = "No"
,    Yes = "Yes"
}


export class ObWriteDomesticConsent4Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteDomesticConsent4DataAuthorisation;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticConsent4DataInitiation;

  @Metadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteDomesticConsent4DataReadRefundAccountEnum;

  @Metadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;
}


export class ObWriteDomesticConsent4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteDomesticConsent4Data;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
