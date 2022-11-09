import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaymentOptionsCashExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsChequeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsCreditCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsDebitCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsMobileNfcExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// PaymentOptions
/** 
 * Forms of payment accepted at the property.
**/
export class PaymentOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=cash" })
  cash?: boolean;

  @Metadata({ data: "json, name=cashException" })
  cashException?: PaymentOptionsCashExceptionEnum;

  @Metadata({ data: "json, name=cheque" })
  cheque?: boolean;

  @Metadata({ data: "json, name=chequeException" })
  chequeException?: PaymentOptionsChequeExceptionEnum;

  @Metadata({ data: "json, name=creditCard" })
  creditCard?: boolean;

  @Metadata({ data: "json, name=creditCardException" })
  creditCardException?: PaymentOptionsCreditCardExceptionEnum;

  @Metadata({ data: "json, name=debitCard" })
  debitCard?: boolean;

  @Metadata({ data: "json, name=debitCardException" })
  debitCardException?: PaymentOptionsDebitCardExceptionEnum;

  @Metadata({ data: "json, name=mobileNfc" })
  mobileNfc?: boolean;

  @Metadata({ data: "json, name=mobileNfcException" })
  mobileNfcException?: PaymentOptionsMobileNfcExceptionEnum;
}
