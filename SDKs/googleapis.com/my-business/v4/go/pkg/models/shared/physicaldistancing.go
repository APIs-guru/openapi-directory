package shared

type PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum string

const (
	PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnumExceptionUnspecified PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnumUnderConstruction    PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum = "UNDER_CONSTRUCTION"
	PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnumDependentOnSeason    PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum = "DEPENDENT_ON_SEASON"
	PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnumDependentOnDayOfWeek PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PhysicalDistancingPhysicalDistancingRequiredExceptionEnum string

const (
	PhysicalDistancingPhysicalDistancingRequiredExceptionEnumExceptionUnspecified PhysicalDistancingPhysicalDistancingRequiredExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PhysicalDistancingPhysicalDistancingRequiredExceptionEnumUnderConstruction    PhysicalDistancingPhysicalDistancingRequiredExceptionEnum = "UNDER_CONSTRUCTION"
	PhysicalDistancingPhysicalDistancingRequiredExceptionEnumDependentOnSeason    PhysicalDistancingPhysicalDistancingRequiredExceptionEnum = "DEPENDENT_ON_SEASON"
	PhysicalDistancingPhysicalDistancingRequiredExceptionEnumDependentOnDayOfWeek PhysicalDistancingPhysicalDistancingRequiredExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PhysicalDistancingSafetyDividersExceptionEnum string

const (
	PhysicalDistancingSafetyDividersExceptionEnumExceptionUnspecified PhysicalDistancingSafetyDividersExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PhysicalDistancingSafetyDividersExceptionEnumUnderConstruction    PhysicalDistancingSafetyDividersExceptionEnum = "UNDER_CONSTRUCTION"
	PhysicalDistancingSafetyDividersExceptionEnumDependentOnSeason    PhysicalDistancingSafetyDividersExceptionEnum = "DEPENDENT_ON_SEASON"
	PhysicalDistancingSafetyDividersExceptionEnumDependentOnDayOfWeek PhysicalDistancingSafetyDividersExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum string

const (
	PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnumExceptionUnspecified PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnumUnderConstruction    PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum = "UNDER_CONSTRUCTION"
	PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnumDependentOnSeason    PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum = "DEPENDENT_ON_SEASON"
	PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnumDependentOnDayOfWeek PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum string

const (
	PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnumExceptionUnspecified PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnumUnderConstruction    PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum = "UNDER_CONSTRUCTION"
	PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnumDependentOnSeason    PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum = "DEPENDENT_ON_SEASON"
	PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnumDependentOnDayOfWeek PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// PhysicalDistancing
// Physical distancing measures implemented by the hotel during COVID-19.
type PhysicalDistancing struct {
	CommonAreasPhysicalDistancingArranged          *bool                                                                 `json:"commonAreasPhysicalDistancingArranged,omitempty"`
	CommonAreasPhysicalDistancingArrangedException *PhysicalDistancingCommonAreasPhysicalDistancingArrangedExceptionEnum `json:"commonAreasPhysicalDistancingArrangedException,omitempty"`
	PhysicalDistancingRequired                     *bool                                                                 `json:"physicalDistancingRequired,omitempty"`
	PhysicalDistancingRequiredException            *PhysicalDistancingPhysicalDistancingRequiredExceptionEnum            `json:"physicalDistancingRequiredException,omitempty"`
	SafetyDividers                                 *bool                                                                 `json:"safetyDividers,omitempty"`
	SafetyDividersException                        *PhysicalDistancingSafetyDividersExceptionEnum                        `json:"safetyDividersException,omitempty"`
	SharedAreasLimitedOccupancy                    *bool                                                                 `json:"sharedAreasLimitedOccupancy,omitempty"`
	SharedAreasLimitedOccupancyException           *PhysicalDistancingSharedAreasLimitedOccupancyExceptionEnum           `json:"sharedAreasLimitedOccupancyException,omitempty"`
	WellnessAreasHavePrivateSpaces                 *bool                                                                 `json:"wellnessAreasHavePrivateSpaces,omitempty"`
	WellnessAreasHavePrivateSpacesException        *PhysicalDistancingWellnessAreasHavePrivateSpacesExceptionEnum        `json:"wellnessAreasHavePrivateSpacesException,omitempty"`
}
