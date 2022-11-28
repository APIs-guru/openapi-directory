import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BusinessBusinessCenterExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum BusinessMeetingRoomsCountExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
export declare enum BusinessMeetingRoomsExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Features of the property of specific interest to the business traveler.
**/
export declare class Business extends SpeakeasyBase {
    businessCenter?: boolean;
    businessCenterException?: BusinessBusinessCenterExceptionEnum;
    meetingRooms?: boolean;
    meetingRoomsCount?: number;
    meetingRoomsCountException?: BusinessMeetingRoomsCountExceptionEnum;
    meetingRoomsException?: BusinessMeetingRoomsExceptionEnum;
}
