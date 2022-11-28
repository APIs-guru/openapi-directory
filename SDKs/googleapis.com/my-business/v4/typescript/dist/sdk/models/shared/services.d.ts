import { SpeakeasyBase } from "../../../internal/utils";
import { LanguagesSpoken } from "./languagesspoken";
export declare enum ServicesBaggageStorageExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesConciergeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesConvenienceStoreExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesCurrencyExchangeExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesElevatorExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesFullServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesGiftShopExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesSelfServiceLaundryExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesSocialHourExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesTwentyFourHourFrontDeskExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum ServicesWakeUpCallsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
**/
export declare class Services extends SpeakeasyBase {
    baggageStorage?: boolean;
    baggageStorageException?: ServicesBaggageStorageExceptionEnum;
    concierge?: boolean;
    conciergeException?: ServicesConciergeExceptionEnum;
    convenienceStore?: boolean;
    convenienceStoreException?: ServicesConvenienceStoreExceptionEnum;
    currencyExchange?: boolean;
    currencyExchangeException?: ServicesCurrencyExchangeExceptionEnum;
    elevator?: boolean;
    elevatorException?: ServicesElevatorExceptionEnum;
    frontDesk?: boolean;
    frontDeskException?: ServicesFrontDeskExceptionEnum;
    fullServiceLaundry?: boolean;
    fullServiceLaundryException?: ServicesFullServiceLaundryExceptionEnum;
    giftShop?: boolean;
    giftShopException?: ServicesGiftShopExceptionEnum;
    languagesSpoken?: LanguagesSpoken;
    selfServiceLaundry?: boolean;
    selfServiceLaundryException?: ServicesSelfServiceLaundryExceptionEnum;
    socialHour?: boolean;
    socialHourException?: ServicesSocialHourExceptionEnum;
    twentyFourHourFrontDesk?: boolean;
    twentyFourHourFrontDeskException?: ServicesTwentyFourHourFrontDeskExceptionEnum;
    wakeUpCalls?: boolean;
    wakeUpCallsException?: ServicesWakeUpCallsExceptionEnum;
}
