import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PersonalProtectionFaceMaskRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum PersonalProtectionProtectiveEquipmentAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Personal protection measures implemented by the hotel during COVID-19.
**/
export declare class PersonalProtection extends SpeakeasyBase {
    commonAreasOfferSanitizingItems?: boolean;
    commonAreasOfferSanitizingItemsException?: PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum;
    faceMaskRequired?: boolean;
    faceMaskRequiredException?: PersonalProtectionFaceMaskRequiredExceptionEnum;
    guestRoomHygieneKitsAvailable?: boolean;
    guestRoomHygieneKitsAvailableException?: PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum;
    protectiveEquipmentAvailable?: boolean;
    protectiveEquipmentAvailableException?: PersonalProtectionProtectiveEquipmentAvailableExceptionEnum;
}
