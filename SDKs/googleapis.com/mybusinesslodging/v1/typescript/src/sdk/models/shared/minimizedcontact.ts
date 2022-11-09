import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MinimizedContactContactlessCheckinCheckoutExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactDigitalGuestRoomKeysExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactPlasticKeycardsDisinfectedExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum MinimizedContactRoomBookingsBufferExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// MinimizedContact
/** 
 * Minimized contact measures implemented by the hotel during COVID-19.
**/
export class MinimizedContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactlessCheckinCheckout" })
  contactlessCheckinCheckout?: boolean;

  @Metadata({ data: "json, name=contactlessCheckinCheckoutException" })
  contactlessCheckinCheckoutException?: MinimizedContactContactlessCheckinCheckoutExceptionEnum;

  @Metadata({ data: "json, name=digitalGuestRoomKeys" })
  digitalGuestRoomKeys?: boolean;

  @Metadata({ data: "json, name=digitalGuestRoomKeysException" })
  digitalGuestRoomKeysException?: MinimizedContactDigitalGuestRoomKeysExceptionEnum;

  @Metadata({ data: "json, name=housekeepingScheduledRequestOnly" })
  housekeepingScheduledRequestOnly?: boolean;

  @Metadata({ data: "json, name=housekeepingScheduledRequestOnlyException" })
  housekeepingScheduledRequestOnlyException?: MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum;

  @Metadata({ data: "json, name=noHighTouchItemsCommonAreas" })
  noHighTouchItemsCommonAreas?: boolean;

  @Metadata({ data: "json, name=noHighTouchItemsCommonAreasException" })
  noHighTouchItemsCommonAreasException?: MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum;

  @Metadata({ data: "json, name=noHighTouchItemsGuestRooms" })
  noHighTouchItemsGuestRooms?: boolean;

  @Metadata({ data: "json, name=noHighTouchItemsGuestRoomsException" })
  noHighTouchItemsGuestRoomsException?: MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum;

  @Metadata({ data: "json, name=plasticKeycardsDisinfected" })
  plasticKeycardsDisinfected?: boolean;

  @Metadata({ data: "json, name=plasticKeycardsDisinfectedException" })
  plasticKeycardsDisinfectedException?: MinimizedContactPlasticKeycardsDisinfectedExceptionEnum;

  @Metadata({ data: "json, name=roomBookingsBuffer" })
  roomBookingsBuffer?: boolean;

  @Metadata({ data: "json, name=roomBookingsBufferException" })
  roomBookingsBufferException?: MinimizedContactRoomBookingsBufferExceptionEnum;
}
