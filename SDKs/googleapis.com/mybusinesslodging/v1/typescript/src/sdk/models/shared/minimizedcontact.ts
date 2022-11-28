import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MinimizedContactContactlessCheckinCheckoutExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactDigitalGuestRoomKeysExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactPlasticKeycardsDisinfectedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactRoomBookingsBufferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// MinimizedContact
/** 
 * Minimized contact measures implemented by the hotel during COVID-19.
**/
export class MinimizedContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactlessCheckinCheckout" })
  contactlessCheckinCheckout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contactlessCheckinCheckoutException" })
  contactlessCheckinCheckoutException?: MinimizedContactContactlessCheckinCheckoutExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=digitalGuestRoomKeys" })
  digitalGuestRoomKeys?: boolean;

  @SpeakeasyMetadata({ data: "json, name=digitalGuestRoomKeysException" })
  digitalGuestRoomKeysException?: MinimizedContactDigitalGuestRoomKeysExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=housekeepingScheduledRequestOnly" })
  housekeepingScheduledRequestOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=housekeepingScheduledRequestOnlyException" })
  housekeepingScheduledRequestOnlyException?: MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=noHighTouchItemsCommonAreas" })
  noHighTouchItemsCommonAreas?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noHighTouchItemsCommonAreasException" })
  noHighTouchItemsCommonAreasException?: MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=noHighTouchItemsGuestRooms" })
  noHighTouchItemsGuestRooms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noHighTouchItemsGuestRoomsException" })
  noHighTouchItemsGuestRoomsException?: MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=plasticKeycardsDisinfected" })
  plasticKeycardsDisinfected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=plasticKeycardsDisinfectedException" })
  plasticKeycardsDisinfectedException?: MinimizedContactPlasticKeycardsDisinfectedExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=roomBookingsBuffer" })
  roomBookingsBuffer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roomBookingsBufferException" })
  roomBookingsBufferException?: MinimizedContactRoomBookingsBufferExceptionEnum;
}
