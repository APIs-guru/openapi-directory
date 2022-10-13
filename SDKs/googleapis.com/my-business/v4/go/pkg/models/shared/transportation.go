package shared

type TransportationAirportShuttleExceptionEnum string

const (
	TransportationAirportShuttleExceptionEnumExceptionUnspecified TransportationAirportShuttleExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationAirportShuttleExceptionEnumUnderConstruction    TransportationAirportShuttleExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationAirportShuttleExceptionEnumDependentOnSeason    TransportationAirportShuttleExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationAirportShuttleExceptionEnumDependentOnDayOfWeek TransportationAirportShuttleExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type TransportationCarRentalOnPropertyExceptionEnum string

const (
	TransportationCarRentalOnPropertyExceptionEnumExceptionUnspecified TransportationCarRentalOnPropertyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationCarRentalOnPropertyExceptionEnumUnderConstruction    TransportationCarRentalOnPropertyExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationCarRentalOnPropertyExceptionEnumDependentOnSeason    TransportationCarRentalOnPropertyExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationCarRentalOnPropertyExceptionEnumDependentOnDayOfWeek TransportationCarRentalOnPropertyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type TransportationFreeAirportShuttleExceptionEnum string

const (
	TransportationFreeAirportShuttleExceptionEnumExceptionUnspecified TransportationFreeAirportShuttleExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationFreeAirportShuttleExceptionEnumUnderConstruction    TransportationFreeAirportShuttleExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationFreeAirportShuttleExceptionEnumDependentOnSeason    TransportationFreeAirportShuttleExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationFreeAirportShuttleExceptionEnumDependentOnDayOfWeek TransportationFreeAirportShuttleExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type TransportationFreePrivateCarServiceExceptionEnum string

const (
	TransportationFreePrivateCarServiceExceptionEnumExceptionUnspecified TransportationFreePrivateCarServiceExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationFreePrivateCarServiceExceptionEnumUnderConstruction    TransportationFreePrivateCarServiceExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationFreePrivateCarServiceExceptionEnumDependentOnSeason    TransportationFreePrivateCarServiceExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationFreePrivateCarServiceExceptionEnumDependentOnDayOfWeek TransportationFreePrivateCarServiceExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type TransportationLocalShuttleExceptionEnum string

const (
	TransportationLocalShuttleExceptionEnumExceptionUnspecified TransportationLocalShuttleExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationLocalShuttleExceptionEnumUnderConstruction    TransportationLocalShuttleExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationLocalShuttleExceptionEnumDependentOnSeason    TransportationLocalShuttleExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationLocalShuttleExceptionEnumDependentOnDayOfWeek TransportationLocalShuttleExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type TransportationPrivateCarServiceExceptionEnum string

const (
	TransportationPrivateCarServiceExceptionEnumExceptionUnspecified TransportationPrivateCarServiceExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationPrivateCarServiceExceptionEnumUnderConstruction    TransportationPrivateCarServiceExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationPrivateCarServiceExceptionEnumDependentOnSeason    TransportationPrivateCarServiceExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationPrivateCarServiceExceptionEnumDependentOnDayOfWeek TransportationPrivateCarServiceExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type TransportationTransferExceptionEnum string

const (
	TransportationTransferExceptionEnumExceptionUnspecified TransportationTransferExceptionEnum = "EXCEPTION_UNSPECIFIED"
	TransportationTransferExceptionEnumUnderConstruction    TransportationTransferExceptionEnum = "UNDER_CONSTRUCTION"
	TransportationTransferExceptionEnumDependentOnSeason    TransportationTransferExceptionEnum = "DEPENDENT_ON_SEASON"
	TransportationTransferExceptionEnumDependentOnDayOfWeek TransportationTransferExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type Transportation struct {
	AirportShuttle                 *bool                                             `json:"airportShuttle"`
	AirportShuttleException        *TransportationAirportShuttleExceptionEnum        `json:"airportShuttleException"`
	CarRentalOnProperty            *bool                                             `json:"carRentalOnProperty"`
	CarRentalOnPropertyException   *TransportationCarRentalOnPropertyExceptionEnum   `json:"carRentalOnPropertyException"`
	FreeAirportShuttle             *bool                                             `json:"freeAirportShuttle"`
	FreeAirportShuttleException    *TransportationFreeAirportShuttleExceptionEnum    `json:"freeAirportShuttleException"`
	FreePrivateCarService          *bool                                             `json:"freePrivateCarService"`
	FreePrivateCarServiceException *TransportationFreePrivateCarServiceExceptionEnum `json:"freePrivateCarServiceException"`
	LocalShuttle                   *bool                                             `json:"localShuttle"`
	LocalShuttleException          *TransportationLocalShuttleExceptionEnum          `json:"localShuttleException"`
	PrivateCarService              *bool                                             `json:"privateCarService"`
	PrivateCarServiceException     *TransportationPrivateCarServiceExceptionEnum     `json:"privateCarServiceException"`
	Transfer                       *bool                                             `json:"transfer"`
	TransferException              *TransportationTransferExceptionEnum              `json:"transferException"`
}
