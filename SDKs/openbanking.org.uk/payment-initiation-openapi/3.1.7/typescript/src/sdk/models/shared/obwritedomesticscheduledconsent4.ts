import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";


export enum ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteDomesticScheduledConsent4DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteDomesticScheduledConsent4DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteDomesticScheduledConsent4DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
export class ObWriteDomesticScheduledConsent4DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" })
  creditorPostalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticScheduledConsent4DataPermissionEnum {
    Create = "Create"
}

export enum ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}


export class ObWriteDomesticScheduledConsent4Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteDomesticScheduledConsent4DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticScheduledConsent4DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission: ObWriteDomesticScheduledConsent4DataPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;
}


export class ObWriteDomesticScheduledConsent4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteDomesticScheduledConsent4Data;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
