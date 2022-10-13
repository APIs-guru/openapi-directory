package shared

type MinimizedContactContactlessCheckinCheckoutExceptionEnum string

const (
	MinimizedContactContactlessCheckinCheckoutExceptionEnumExceptionUnspecified MinimizedContactContactlessCheckinCheckoutExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactContactlessCheckinCheckoutExceptionEnumUnderConstruction    MinimizedContactContactlessCheckinCheckoutExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactContactlessCheckinCheckoutExceptionEnumDependentOnSeason    MinimizedContactContactlessCheckinCheckoutExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactContactlessCheckinCheckoutExceptionEnumDependentOnDayOfWeek MinimizedContactContactlessCheckinCheckoutExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContactDigitalGuestRoomKeysExceptionEnum string

const (
	MinimizedContactDigitalGuestRoomKeysExceptionEnumExceptionUnspecified MinimizedContactDigitalGuestRoomKeysExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactDigitalGuestRoomKeysExceptionEnumUnderConstruction    MinimizedContactDigitalGuestRoomKeysExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactDigitalGuestRoomKeysExceptionEnumDependentOnSeason    MinimizedContactDigitalGuestRoomKeysExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactDigitalGuestRoomKeysExceptionEnumDependentOnDayOfWeek MinimizedContactDigitalGuestRoomKeysExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum string

const (
	MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnumExceptionUnspecified MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnumUnderConstruction    MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnumDependentOnSeason    MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnumDependentOnDayOfWeek MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum string

const (
	MinimizedContactNoHighTouchItemsCommonAreasExceptionEnumExceptionUnspecified MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactNoHighTouchItemsCommonAreasExceptionEnumUnderConstruction    MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactNoHighTouchItemsCommonAreasExceptionEnumDependentOnSeason    MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactNoHighTouchItemsCommonAreasExceptionEnumDependentOnDayOfWeek MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum string

const (
	MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnumExceptionUnspecified MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnumUnderConstruction    MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnumDependentOnSeason    MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnumDependentOnDayOfWeek MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContactPlasticKeycardsDisinfectedExceptionEnum string

const (
	MinimizedContactPlasticKeycardsDisinfectedExceptionEnumExceptionUnspecified MinimizedContactPlasticKeycardsDisinfectedExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactPlasticKeycardsDisinfectedExceptionEnumUnderConstruction    MinimizedContactPlasticKeycardsDisinfectedExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactPlasticKeycardsDisinfectedExceptionEnumDependentOnSeason    MinimizedContactPlasticKeycardsDisinfectedExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactPlasticKeycardsDisinfectedExceptionEnumDependentOnDayOfWeek MinimizedContactPlasticKeycardsDisinfectedExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContactRoomBookingsBufferExceptionEnum string

const (
	MinimizedContactRoomBookingsBufferExceptionEnumExceptionUnspecified MinimizedContactRoomBookingsBufferExceptionEnum = "EXCEPTION_UNSPECIFIED"
	MinimizedContactRoomBookingsBufferExceptionEnumUnderConstruction    MinimizedContactRoomBookingsBufferExceptionEnum = "UNDER_CONSTRUCTION"
	MinimizedContactRoomBookingsBufferExceptionEnumDependentOnSeason    MinimizedContactRoomBookingsBufferExceptionEnum = "DEPENDENT_ON_SEASON"
	MinimizedContactRoomBookingsBufferExceptionEnumDependentOnDayOfWeek MinimizedContactRoomBookingsBufferExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type MinimizedContact struct {
	ContactlessCheckinCheckout                *bool                                                          `json:"contactlessCheckinCheckout"`
	ContactlessCheckinCheckoutException       *MinimizedContactContactlessCheckinCheckoutExceptionEnum       `json:"contactlessCheckinCheckoutException"`
	DigitalGuestRoomKeys                      *bool                                                          `json:"digitalGuestRoomKeys"`
	DigitalGuestRoomKeysException             *MinimizedContactDigitalGuestRoomKeysExceptionEnum             `json:"digitalGuestRoomKeysException"`
	HousekeepingScheduledRequestOnly          *bool                                                          `json:"housekeepingScheduledRequestOnly"`
	HousekeepingScheduledRequestOnlyException *MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum `json:"housekeepingScheduledRequestOnlyException"`
	NoHighTouchItemsCommonAreas               *bool                                                          `json:"noHighTouchItemsCommonAreas"`
	NoHighTouchItemsCommonAreasException      *MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum      `json:"noHighTouchItemsCommonAreasException"`
	NoHighTouchItemsGuestRooms                *bool                                                          `json:"noHighTouchItemsGuestRooms"`
	NoHighTouchItemsGuestRoomsException       *MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum       `json:"noHighTouchItemsGuestRoomsException"`
	PlasticKeycardsDisinfected                *bool                                                          `json:"plasticKeycardsDisinfected"`
	PlasticKeycardsDisinfectedException       *MinimizedContactPlasticKeycardsDisinfectedExceptionEnum       `json:"plasticKeycardsDisinfectedException"`
	RoomBookingsBuffer                        *bool                                                          `json:"roomBookingsBuffer"`
	RoomBookingsBufferException               *MinimizedContactRoomBookingsBufferExceptionEnum               `json:"roomBookingsBufferException"`
}
