package shared

type BusinessBusinessCenterExceptionEnum string

const (
	BusinessBusinessCenterExceptionEnumExceptionUnspecified BusinessBusinessCenterExceptionEnum = "EXCEPTION_UNSPECIFIED"
	BusinessBusinessCenterExceptionEnumUnderConstruction    BusinessBusinessCenterExceptionEnum = "UNDER_CONSTRUCTION"
	BusinessBusinessCenterExceptionEnumDependentOnSeason    BusinessBusinessCenterExceptionEnum = "DEPENDENT_ON_SEASON"
	BusinessBusinessCenterExceptionEnumDependentOnDayOfWeek BusinessBusinessCenterExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type BusinessMeetingRoomsCountExceptionEnum string

const (
	BusinessMeetingRoomsCountExceptionEnumExceptionUnspecified BusinessMeetingRoomsCountExceptionEnum = "EXCEPTION_UNSPECIFIED"
	BusinessMeetingRoomsCountExceptionEnumUnderConstruction    BusinessMeetingRoomsCountExceptionEnum = "UNDER_CONSTRUCTION"
	BusinessMeetingRoomsCountExceptionEnumDependentOnSeason    BusinessMeetingRoomsCountExceptionEnum = "DEPENDENT_ON_SEASON"
	BusinessMeetingRoomsCountExceptionEnumDependentOnDayOfWeek BusinessMeetingRoomsCountExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type BusinessMeetingRoomsExceptionEnum string

const (
	BusinessMeetingRoomsExceptionEnumExceptionUnspecified BusinessMeetingRoomsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	BusinessMeetingRoomsExceptionEnumUnderConstruction    BusinessMeetingRoomsExceptionEnum = "UNDER_CONSTRUCTION"
	BusinessMeetingRoomsExceptionEnumDependentOnSeason    BusinessMeetingRoomsExceptionEnum = "DEPENDENT_ON_SEASON"
	BusinessMeetingRoomsExceptionEnumDependentOnDayOfWeek BusinessMeetingRoomsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type Business struct {
	BusinessCenter             *bool                                   `json:"businessCenter"`
	BusinessCenterException    *BusinessBusinessCenterExceptionEnum    `json:"businessCenterException"`
	MeetingRooms               *bool                                   `json:"meetingRooms"`
	MeetingRoomsCount          *int32                                  `json:"meetingRoomsCount"`
	MeetingRoomsCountException *BusinessMeetingRoomsCountExceptionEnum `json:"meetingRoomsCountException"`
	MeetingRoomsException      *BusinessMeetingRoomsExceptionEnum      `json:"meetingRoomsException"`
}
