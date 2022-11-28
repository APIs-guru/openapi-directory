import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MinimizedContactContactlessCheckinCheckoutExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum MinimizedContactDigitalGuestRoomKeysExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum MinimizedContactPlasticKeycardsDisinfectedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum MinimizedContactRoomBookingsBufferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Minimized contact measures implemented by the hotel during COVID-19.
**/
export declare class MinimizedContact extends SpeakeasyBase {
    contactlessCheckinCheckout?: boolean;
    contactlessCheckinCheckoutException?: MinimizedContactContactlessCheckinCheckoutExceptionEnum;
    digitalGuestRoomKeys?: boolean;
    digitalGuestRoomKeysException?: MinimizedContactDigitalGuestRoomKeysExceptionEnum;
    housekeepingScheduledRequestOnly?: boolean;
    housekeepingScheduledRequestOnlyException?: MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum;
    noHighTouchItemsCommonAreas?: boolean;
    noHighTouchItemsCommonAreasException?: MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum;
    noHighTouchItemsGuestRooms?: boolean;
    noHighTouchItemsGuestRoomsException?: MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum;
    plasticKeycardsDisinfected?: boolean;
    plasticKeycardsDisinfectedException?: MinimizedContactPlasticKeycardsDisinfectedExceptionEnum;
    roomBookingsBuffer?: boolean;
    roomBookingsBufferException?: MinimizedContactRoomBookingsBufferExceptionEnum;
}
