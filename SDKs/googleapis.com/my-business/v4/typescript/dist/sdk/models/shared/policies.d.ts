import { SpeakeasyBase } from "../../../internal/utils";
import { TimeOfDay } from "./timeofday";
import { PaymentOptions } from "./paymentoptions";
export declare enum PoliciesAllInclusiveAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesAllInclusiveOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesCheckinTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesCheckoutTimeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesKidsStayFreeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesMaxChildAgeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesMaxKidsStayFreeCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PoliciesSmokeFreePropertyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Property rules that impact guests.
**/
export declare class Policies extends SpeakeasyBase {
    allInclusiveAvailable?: boolean;
    allInclusiveAvailableException?: PoliciesAllInclusiveAvailableExceptionEnum;
    allInclusiveOnly?: boolean;
    allInclusiveOnlyException?: PoliciesAllInclusiveOnlyExceptionEnum;
    checkinTime?: TimeOfDay;
    checkinTimeException?: PoliciesCheckinTimeExceptionEnum;
    checkoutTime?: TimeOfDay;
    checkoutTimeException?: PoliciesCheckoutTimeExceptionEnum;
    kidsStayFree?: boolean;
    kidsStayFreeException?: PoliciesKidsStayFreeExceptionEnum;
    maxChildAge?: number;
    maxChildAgeException?: PoliciesMaxChildAgeExceptionEnum;
    maxKidsStayFreeCount?: number;
    maxKidsStayFreeCountException?: PoliciesMaxKidsStayFreeCountExceptionEnum;
    paymentOptions?: PaymentOptions;
    smokeFreeProperty?: boolean;
    smokeFreePropertyException?: PoliciesSmokeFreePropertyExceptionEnum;
}
