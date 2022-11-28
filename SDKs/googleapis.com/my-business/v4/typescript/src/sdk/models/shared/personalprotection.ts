import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PersonalProtectionFaceMaskRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PersonalProtectionProtectiveEquipmentAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// PersonalProtection
/** 
 * Personal protection measures implemented by the hotel during COVID-19.
**/
export class PersonalProtection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commonAreasOfferSanitizingItems" })
  commonAreasOfferSanitizingItems?: boolean;

  @SpeakeasyMetadata({ data: "json, name=commonAreasOfferSanitizingItemsException" })
  commonAreasOfferSanitizingItemsException?: PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=faceMaskRequired" })
  faceMaskRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=faceMaskRequiredException" })
  faceMaskRequiredException?: PersonalProtectionFaceMaskRequiredExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=guestRoomHygieneKitsAvailable" })
  guestRoomHygieneKitsAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=guestRoomHygieneKitsAvailableException" })
  guestRoomHygieneKitsAvailableException?: PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=protectiveEquipmentAvailable" })
  protectiveEquipmentAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=protectiveEquipmentAvailableException" })
  protectiveEquipmentAvailableException?: PersonalProtectionProtectiveEquipmentAvailableExceptionEnum;
}
