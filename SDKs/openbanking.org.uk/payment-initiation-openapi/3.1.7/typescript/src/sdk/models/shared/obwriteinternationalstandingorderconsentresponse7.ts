import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";

export enum ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum {
    Any = "Any"
,    Single = "Single"
}


// ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum;

  @Metadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteInternationalStandingOrderConsentResponse7DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount
/** 
 * Provides the details to identify the beneficiary account.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent
/** 
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteInternationalStandingOrderConsentResponse7DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export class ObWriteInternationalStandingOrderConsentResponse7DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent;

  @Metadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @Metadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @Metadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @Metadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount;

  @Metadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @Metadata({ data: "json, name=Purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum {
    Create = "Create"
}

export enum ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum {
    No = "No"
,    Yes = "Yes"
}

export enum ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum {
    Authorised = "Authorised"
,    AwaitingAuthorisation = "AwaitingAuthorisation"
,    Consumed = "Consumed"
,    Rejected = "Rejected"
}


export class ObWriteInternationalStandingOrderConsentResponse7Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation;

  @Metadata({ data: "json, name=Charges", elemType: shared.ObWriteInternationalStandingOrderConsentResponse7DataCharges })
  charges?: ObWriteInternationalStandingOrderConsentResponse7DataCharges[];

  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=CutOffDateTime" })
  cutOffDateTime?: Date;

  @Metadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalStandingOrderConsentResponse7DataInitiation;

  @Metadata({ data: "json, name=Permission" })
  permission: ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum;

  @Metadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum;

  @Metadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteInternationalStandingOrderConsentResponse7 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteInternationalStandingOrderConsentResponse7Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
