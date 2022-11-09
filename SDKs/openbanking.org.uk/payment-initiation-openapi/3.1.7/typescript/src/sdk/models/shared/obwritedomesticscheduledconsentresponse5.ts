import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";

export enum ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any"
,    Single = "Single"
}


// ObWriteDomesticScheduledConsentResponse5DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteDomesticScheduledConsentResponse5DataAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum;

  @Metadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteDomesticScheduledConsentResponse5DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteDomesticScheduledConsentResponse5DataCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteDomesticScheduledConsentResponse5DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
export class ObWriteDomesticScheduledConsentResponse5DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=CreditorPostalAddress" })
  creditorPostalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification?: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount;

  @Metadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @Metadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @Metadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime: Date;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticScheduledConsentResponse5DataPermissionEnum {
    Create = "Create"
}

export enum ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum {
    No = "No"
,    Yes = "Yes"
}

export enum ObWriteDomesticScheduledConsentResponse5DataStatusEnum {
    Authorised = "Authorised"
,    AwaitingAuthorisation = "AwaitingAuthorisation"
,    Consumed = "Consumed"
,    Rejected = "Rejected"
}


export class ObWriteDomesticScheduledConsentResponse5Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteDomesticScheduledConsentResponse5DataAuthorisation;

  @Metadata({ data: "json, name=Charges", elemType: shared.ObWriteDomesticScheduledConsentResponse5DataCharges })
  charges?: ObWriteDomesticScheduledConsentResponse5DataCharges[];

  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=CutOffDateTime" })
  cutOffDateTime?: Date;

  @Metadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @Metadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @Metadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticScheduledConsentResponse5DataInitiation;

  @Metadata({ data: "json, name=Permission" })
  permission: ObWriteDomesticScheduledConsentResponse5DataPermissionEnum;

  @Metadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum;

  @Metadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteDomesticScheduledConsentResponse5DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteDomesticScheduledConsentResponse5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteDomesticScheduledConsentResponse5Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
