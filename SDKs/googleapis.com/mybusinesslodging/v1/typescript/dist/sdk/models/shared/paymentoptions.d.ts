import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentOptionsCashExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PaymentOptionsChequeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PaymentOptionsCreditCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PaymentOptionsDebitCardExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PaymentOptionsMobileNfcExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Forms of payment accepted at the property.
**/
export declare class PaymentOptions extends SpeakeasyBase {
    cash?: boolean;
    cashException?: PaymentOptionsCashExceptionEnum;
    cheque?: boolean;
    chequeException?: PaymentOptionsChequeExceptionEnum;
    creditCard?: boolean;
    creditCardException?: PaymentOptionsCreditCardExceptionEnum;
    debitCard?: boolean;
    debitCardException?: PaymentOptionsDebitCardExceptionEnum;
    mobileNfc?: boolean;
    mobileNfcException?: PaymentOptionsMobileNfcExceptionEnum;
}
