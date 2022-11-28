package shared

type ParkingElectricCarChargingStationsExceptionEnum string

const (
	ParkingElectricCarChargingStationsExceptionEnumExceptionUnspecified ParkingElectricCarChargingStationsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingElectricCarChargingStationsExceptionEnumUnderConstruction    ParkingElectricCarChargingStationsExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingElectricCarChargingStationsExceptionEnumDependentOnSeason    ParkingElectricCarChargingStationsExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingElectricCarChargingStationsExceptionEnumDependentOnDayOfWeek ParkingElectricCarChargingStationsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ParkingFreeParkingExceptionEnum string

const (
	ParkingFreeParkingExceptionEnumExceptionUnspecified ParkingFreeParkingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingFreeParkingExceptionEnumUnderConstruction    ParkingFreeParkingExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingFreeParkingExceptionEnumDependentOnSeason    ParkingFreeParkingExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingFreeParkingExceptionEnumDependentOnDayOfWeek ParkingFreeParkingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ParkingFreeSelfParkingExceptionEnum string

const (
	ParkingFreeSelfParkingExceptionEnumExceptionUnspecified ParkingFreeSelfParkingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingFreeSelfParkingExceptionEnumUnderConstruction    ParkingFreeSelfParkingExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingFreeSelfParkingExceptionEnumDependentOnSeason    ParkingFreeSelfParkingExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingFreeSelfParkingExceptionEnumDependentOnDayOfWeek ParkingFreeSelfParkingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ParkingFreeValetParkingExceptionEnum string

const (
	ParkingFreeValetParkingExceptionEnumExceptionUnspecified ParkingFreeValetParkingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingFreeValetParkingExceptionEnumUnderConstruction    ParkingFreeValetParkingExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingFreeValetParkingExceptionEnumDependentOnSeason    ParkingFreeValetParkingExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingFreeValetParkingExceptionEnumDependentOnDayOfWeek ParkingFreeValetParkingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ParkingParkingAvailableExceptionEnum string

const (
	ParkingParkingAvailableExceptionEnumExceptionUnspecified ParkingParkingAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingParkingAvailableExceptionEnumUnderConstruction    ParkingParkingAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingParkingAvailableExceptionEnumDependentOnSeason    ParkingParkingAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingParkingAvailableExceptionEnumDependentOnDayOfWeek ParkingParkingAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ParkingSelfParkingAvailableExceptionEnum string

const (
	ParkingSelfParkingAvailableExceptionEnumExceptionUnspecified ParkingSelfParkingAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingSelfParkingAvailableExceptionEnumUnderConstruction    ParkingSelfParkingAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingSelfParkingAvailableExceptionEnumDependentOnSeason    ParkingSelfParkingAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingSelfParkingAvailableExceptionEnumDependentOnDayOfWeek ParkingSelfParkingAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type ParkingValetParkingAvailableExceptionEnum string

const (
	ParkingValetParkingAvailableExceptionEnumExceptionUnspecified ParkingValetParkingAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	ParkingValetParkingAvailableExceptionEnumUnderConstruction    ParkingValetParkingAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	ParkingValetParkingAvailableExceptionEnumDependentOnSeason    ParkingValetParkingAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	ParkingValetParkingAvailableExceptionEnumDependentOnDayOfWeek ParkingValetParkingAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// Parking
// Parking options at the property.
type Parking struct {
	ElectricCarChargingStations          *bool                                            `json:"electricCarChargingStations,omitempty"`
	ElectricCarChargingStationsException *ParkingElectricCarChargingStationsExceptionEnum `json:"electricCarChargingStationsException,omitempty"`
	FreeParking                          *bool                                            `json:"freeParking,omitempty"`
	FreeParkingException                 *ParkingFreeParkingExceptionEnum                 `json:"freeParkingException,omitempty"`
	FreeSelfParking                      *bool                                            `json:"freeSelfParking,omitempty"`
	FreeSelfParkingException             *ParkingFreeSelfParkingExceptionEnum             `json:"freeSelfParkingException,omitempty"`
	FreeValetParking                     *bool                                            `json:"freeValetParking,omitempty"`
	FreeValetParkingException            *ParkingFreeValetParkingExceptionEnum            `json:"freeValetParkingException,omitempty"`
	ParkingAvailable                     *bool                                            `json:"parkingAvailable,omitempty"`
	ParkingAvailableException            *ParkingParkingAvailableExceptionEnum            `json:"parkingAvailableException,omitempty"`
	SelfParkingAvailable                 *bool                                            `json:"selfParkingAvailable,omitempty"`
	SelfParkingAvailableException        *ParkingSelfParkingAvailableExceptionEnum        `json:"selfParkingAvailableException,omitempty"`
	ValetParkingAvailable                *bool                                            `json:"valetParkingAvailable,omitempty"`
	ValetParkingAvailableException       *ParkingValetParkingAvailableExceptionEnum       `json:"valetParkingAvailableException,omitempty"`
}
