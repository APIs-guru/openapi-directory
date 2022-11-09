import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PersonalProtectionFaceMaskRequiredExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum PersonalProtectionProtectiveEquipmentAvailableExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// PersonalProtection
/** 
 * Personal protection measures implemented by the hotel during COVID-19.
**/
export class PersonalProtection extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonAreasOfferSanitizingItems" })
  commonAreasOfferSanitizingItems?: boolean;

  @Metadata({ data: "json, name=commonAreasOfferSanitizingItemsException" })
  commonAreasOfferSanitizingItemsException?: PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum;

  @Metadata({ data: "json, name=faceMaskRequired" })
  faceMaskRequired?: boolean;

  @Metadata({ data: "json, name=faceMaskRequiredException" })
  faceMaskRequiredException?: PersonalProtectionFaceMaskRequiredExceptionEnum;

  @Metadata({ data: "json, name=guestRoomHygieneKitsAvailable" })
  guestRoomHygieneKitsAvailable?: boolean;

  @Metadata({ data: "json, name=guestRoomHygieneKitsAvailableException" })
  guestRoomHygieneKitsAvailableException?: PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum;

  @Metadata({ data: "json, name=protectiveEquipmentAvailable" })
  protectiveEquipmentAvailable?: boolean;

  @Metadata({ data: "json, name=protectiveEquipmentAvailableException" })
  protectiveEquipmentAvailableException?: PersonalProtectionProtectiveEquipmentAvailableExceptionEnum;
}
