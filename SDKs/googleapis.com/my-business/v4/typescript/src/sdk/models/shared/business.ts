import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BusinessBusinessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum BusinessMeetingRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum BusinessMeetingRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Business
/** 
 * Features of the property of specific interest to the business traveler.
**/
export class Business extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessCenter" })
  businessCenter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=businessCenterException" })
  businessCenterException?: BusinessBusinessCenterExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=meetingRooms" })
  meetingRooms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meetingRoomsCount" })
  meetingRoomsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=meetingRoomsCountException" })
  meetingRoomsCountException?: BusinessMeetingRoomsCountExceptionEnum;

  @SpeakeasyMetadata({ data: "json, name=meetingRoomsException" })
  meetingRoomsException?: BusinessMeetingRoomsExceptionEnum;
}
