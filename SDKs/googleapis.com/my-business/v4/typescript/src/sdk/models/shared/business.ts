import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BusinessBusinessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum BusinessMeetingRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}

export enum BusinessMeetingRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED"
,    UnderConstruction = "UNDER_CONSTRUCTION"
,    DependentOnSeason = "DEPENDENT_ON_SEASON"
,    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}


// Business
/** 
 * Features of the property of specific interest to the business traveler.
**/
export class Business extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessCenter" })
  businessCenter?: boolean;

  @Metadata({ data: "json, name=businessCenterException" })
  businessCenterException?: BusinessBusinessCenterExceptionEnum;

  @Metadata({ data: "json, name=meetingRooms" })
  meetingRooms?: boolean;

  @Metadata({ data: "json, name=meetingRoomsCount" })
  meetingRoomsCount?: number;

  @Metadata({ data: "json, name=meetingRoomsCountException" })
  meetingRoomsCountException?: BusinessMeetingRoomsCountExceptionEnum;

  @Metadata({ data: "json, name=meetingRoomsException" })
  meetingRoomsException?: BusinessMeetingRoomsExceptionEnum;
}
