import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";


export enum ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteDomesticStandingOrderConsent5DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteDomesticStandingOrderConsent5DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount
/** 
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export class ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount
/** 
 * Provides the details to identify the debtor account.
**/
export class ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount
/** 
 * The amount of the final Standing Order
**/
export class ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount
/** 
 * The amount of the first Standing Order
**/
export class ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount
/** 
 * The amount of the recurring Standing Order
**/
export class ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderConsent5DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export class ObWriteDomesticStandingOrderConsent5DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount: ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" })
  recurringPaymentAmount?: ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" })
  recurringPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticStandingOrderConsent5DataPermissionEnum {
    Create = "Create"
}

export enum ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}


export class ObWriteDomesticStandingOrderConsent5Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteDomesticStandingOrderConsent5DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticStandingOrderConsent5DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission: ObWriteDomesticStandingOrderConsent5DataPermissionEnum;

  @SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;
}


export class ObWriteDomesticStandingOrderConsent5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteDomesticStandingOrderConsent5Data;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
