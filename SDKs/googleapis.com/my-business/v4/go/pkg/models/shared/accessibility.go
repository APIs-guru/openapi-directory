package shared

type AccessibilityMobilityAccessibleElevatorExceptionEnum string

const (
	AccessibilityMobilityAccessibleElevatorExceptionEnumExceptionUnspecified AccessibilityMobilityAccessibleElevatorExceptionEnum = "EXCEPTION_UNSPECIFIED"
	AccessibilityMobilityAccessibleElevatorExceptionEnumUnderConstruction    AccessibilityMobilityAccessibleElevatorExceptionEnum = "UNDER_CONSTRUCTION"
	AccessibilityMobilityAccessibleElevatorExceptionEnumDependentOnSeason    AccessibilityMobilityAccessibleElevatorExceptionEnum = "DEPENDENT_ON_SEASON"
	AccessibilityMobilityAccessibleElevatorExceptionEnumDependentOnDayOfWeek AccessibilityMobilityAccessibleElevatorExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type AccessibilityMobilityAccessibleExceptionEnum string

const (
	AccessibilityMobilityAccessibleExceptionEnumExceptionUnspecified AccessibilityMobilityAccessibleExceptionEnum = "EXCEPTION_UNSPECIFIED"
	AccessibilityMobilityAccessibleExceptionEnumUnderConstruction    AccessibilityMobilityAccessibleExceptionEnum = "UNDER_CONSTRUCTION"
	AccessibilityMobilityAccessibleExceptionEnumDependentOnSeason    AccessibilityMobilityAccessibleExceptionEnum = "DEPENDENT_ON_SEASON"
	AccessibilityMobilityAccessibleExceptionEnumDependentOnDayOfWeek AccessibilityMobilityAccessibleExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type AccessibilityMobilityAccessibleParkingExceptionEnum string

const (
	AccessibilityMobilityAccessibleParkingExceptionEnumExceptionUnspecified AccessibilityMobilityAccessibleParkingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	AccessibilityMobilityAccessibleParkingExceptionEnumUnderConstruction    AccessibilityMobilityAccessibleParkingExceptionEnum = "UNDER_CONSTRUCTION"
	AccessibilityMobilityAccessibleParkingExceptionEnumDependentOnSeason    AccessibilityMobilityAccessibleParkingExceptionEnum = "DEPENDENT_ON_SEASON"
	AccessibilityMobilityAccessibleParkingExceptionEnumDependentOnDayOfWeek AccessibilityMobilityAccessibleParkingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type AccessibilityMobilityAccessiblePoolExceptionEnum string

const (
	AccessibilityMobilityAccessiblePoolExceptionEnumExceptionUnspecified AccessibilityMobilityAccessiblePoolExceptionEnum = "EXCEPTION_UNSPECIFIED"
	AccessibilityMobilityAccessiblePoolExceptionEnumUnderConstruction    AccessibilityMobilityAccessiblePoolExceptionEnum = "UNDER_CONSTRUCTION"
	AccessibilityMobilityAccessiblePoolExceptionEnumDependentOnSeason    AccessibilityMobilityAccessiblePoolExceptionEnum = "DEPENDENT_ON_SEASON"
	AccessibilityMobilityAccessiblePoolExceptionEnumDependentOnDayOfWeek AccessibilityMobilityAccessiblePoolExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// Accessibility
// Physical adaptations made to the property in consideration of varying levels of human physical ability.
type Accessibility struct {
	MobilityAccessible                  *bool                                                 `json:"mobilityAccessible,omitempty"`
	MobilityAccessibleElevator          *bool                                                 `json:"mobilityAccessibleElevator,omitempty"`
	MobilityAccessibleElevatorException *AccessibilityMobilityAccessibleElevatorExceptionEnum `json:"mobilityAccessibleElevatorException,omitempty"`
	MobilityAccessibleException         *AccessibilityMobilityAccessibleExceptionEnum         `json:"mobilityAccessibleException,omitempty"`
	MobilityAccessibleParking           *bool                                                 `json:"mobilityAccessibleParking,omitempty"`
	MobilityAccessibleParkingException  *AccessibilityMobilityAccessibleParkingExceptionEnum  `json:"mobilityAccessibleParkingException,omitempty"`
	MobilityAccessiblePool              *bool                                                 `json:"mobilityAccessiblePool,omitempty"`
	MobilityAccessiblePoolException     *AccessibilityMobilityAccessiblePoolExceptionEnum     `json:"mobilityAccessiblePoolException,omitempty"`
}
