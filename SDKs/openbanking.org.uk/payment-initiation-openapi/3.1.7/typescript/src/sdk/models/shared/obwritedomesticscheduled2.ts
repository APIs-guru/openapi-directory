import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";


// ObWriteDomesticScheduled2DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteDomesticScheduled2DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduled2DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticScheduled2DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduled2DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteDomesticScheduled2DataInitiationInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticScheduled2DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteDomesticScheduled2DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteDomesticScheduled2DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
export class ObWriteDomesticScheduled2DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticScheduled2DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=CreditorPostalAddress" })
  creditorPostalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticScheduled2DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification?: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteDomesticScheduled2DataInitiationInstructedAmount;

  @Metadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @Metadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @Metadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteDomesticScheduled2DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime: Date;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteDomesticScheduled2Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticScheduled2DataInitiation;
}


export class ObWriteDomesticScheduled2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteDomesticScheduled2Data;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
