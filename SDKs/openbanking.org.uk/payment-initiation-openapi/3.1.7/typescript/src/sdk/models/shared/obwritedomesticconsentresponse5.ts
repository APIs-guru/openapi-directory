import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";


export enum ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteDomesticConsentResponse5DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteDomesticConsentResponse5DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteDomesticConsentResponse5DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteDomesticConsentResponse5DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteDomesticConsentResponse5DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteDomesticConsentResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticConsentResponse5DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticConsentResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticConsentResponse5DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteDomesticConsentResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteDomesticConsentResponse5DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
export class ObWriteDomesticConsentResponse5DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticConsentResponse5DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" })
  creditorPostalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticConsentResponse5DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteDomesticConsentResponse5DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticConsentResponse5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}

export enum ObWriteDomesticConsentResponse5DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}


export class ObWriteDomesticConsentResponse5Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteDomesticConsentResponse5DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticConsentResponse5DataCharges })
  charges?: ObWriteDomesticConsentResponse5DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CutOffDateTime" })
  cutOffDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticConsentResponse5DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteDomesticConsentResponse5DataReadRefundAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteDomesticConsentResponse5DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteDomesticConsentResponse5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteDomesticConsentResponse5Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
