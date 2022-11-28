import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaymentOptionsCashExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsChequeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsCreditCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsDebitCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PaymentOptionsMobileNfcExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// PaymentOptions
/** 
 * Forms of payment accepted at the property.
**/
export class PaymentOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cash" })
  cash?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cashException" })
  cashException?: PaymentOptionsCashExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=cheque" })
  cheque?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chequeException" })
  chequeException?: PaymentOptionsChequeExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=creditCard" })
  creditCard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=creditCardException" })
  creditCardException?: PaymentOptionsCreditCardExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=debitCard" })
  debitCard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=debitCardException" })
  debitCardException?: PaymentOptionsDebitCardExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=mobileNfc" })
  mobileNfc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobileNfcException" })
  mobileNfcException?: PaymentOptionsMobileNfcExceptionEnum;
}
