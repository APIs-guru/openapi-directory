import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";


export enum ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteDomesticStandingOrderConsentResponse6DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount
/** 
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount
/** 
 * The amount of the final Standing Order
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount
/** 
 * The amount of the first Standing Order
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount
/** 
 * The amount of the recurring Standing Order
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderConsentResponse6DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export class ObWriteDomesticStandingOrderConsentResponse6DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount: ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" })
  recurringPaymentAmount?: ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" })
  recurringPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum {
    Create = "Create"
}

export enum ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}

export enum ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}


export class ObWriteDomesticStandingOrderConsentResponse6Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticStandingOrderConsentResponse6DataCharges })
  charges?: ObWriteDomesticStandingOrderConsentResponse6DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CutOffDateTime" })
  cutOffDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticStandingOrderConsentResponse6DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission: ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteDomesticStandingOrderConsentResponse6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteDomesticStandingOrderConsentResponse6Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
