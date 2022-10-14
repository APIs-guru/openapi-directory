package shared

type WellnessDoctorOnCallExceptionEnum string

const (
	WellnessDoctorOnCallExceptionEnumExceptionUnspecified WellnessDoctorOnCallExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessDoctorOnCallExceptionEnumUnderConstruction    WellnessDoctorOnCallExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessDoctorOnCallExceptionEnumDependentOnSeason    WellnessDoctorOnCallExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessDoctorOnCallExceptionEnumDependentOnDayOfWeek WellnessDoctorOnCallExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessEllipticalMachineExceptionEnum string

const (
	WellnessEllipticalMachineExceptionEnumExceptionUnspecified WellnessEllipticalMachineExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessEllipticalMachineExceptionEnumUnderConstruction    WellnessEllipticalMachineExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessEllipticalMachineExceptionEnumDependentOnSeason    WellnessEllipticalMachineExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessEllipticalMachineExceptionEnumDependentOnDayOfWeek WellnessEllipticalMachineExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessFitnessCenterExceptionEnum string

const (
	WellnessFitnessCenterExceptionEnumExceptionUnspecified WellnessFitnessCenterExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessFitnessCenterExceptionEnumUnderConstruction    WellnessFitnessCenterExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessFitnessCenterExceptionEnumDependentOnSeason    WellnessFitnessCenterExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessFitnessCenterExceptionEnumDependentOnDayOfWeek WellnessFitnessCenterExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessFreeFitnessCenterExceptionEnum string

const (
	WellnessFreeFitnessCenterExceptionEnumExceptionUnspecified WellnessFreeFitnessCenterExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessFreeFitnessCenterExceptionEnumUnderConstruction    WellnessFreeFitnessCenterExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessFreeFitnessCenterExceptionEnumDependentOnSeason    WellnessFreeFitnessCenterExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessFreeFitnessCenterExceptionEnumDependentOnDayOfWeek WellnessFreeFitnessCenterExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessFreeWeightsExceptionEnum string

const (
	WellnessFreeWeightsExceptionEnumExceptionUnspecified WellnessFreeWeightsExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessFreeWeightsExceptionEnumUnderConstruction    WellnessFreeWeightsExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessFreeWeightsExceptionEnumDependentOnSeason    WellnessFreeWeightsExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessFreeWeightsExceptionEnumDependentOnDayOfWeek WellnessFreeWeightsExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessMassageExceptionEnum string

const (
	WellnessMassageExceptionEnumExceptionUnspecified WellnessMassageExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessMassageExceptionEnumUnderConstruction    WellnessMassageExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessMassageExceptionEnumDependentOnSeason    WellnessMassageExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessMassageExceptionEnumDependentOnDayOfWeek WellnessMassageExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessSalonExceptionEnum string

const (
	WellnessSalonExceptionEnumExceptionUnspecified WellnessSalonExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessSalonExceptionEnumUnderConstruction    WellnessSalonExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessSalonExceptionEnumDependentOnSeason    WellnessSalonExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessSalonExceptionEnumDependentOnDayOfWeek WellnessSalonExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessSaunaExceptionEnum string

const (
	WellnessSaunaExceptionEnumExceptionUnspecified WellnessSaunaExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessSaunaExceptionEnumUnderConstruction    WellnessSaunaExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessSaunaExceptionEnumDependentOnSeason    WellnessSaunaExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessSaunaExceptionEnumDependentOnDayOfWeek WellnessSaunaExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessSpaExceptionEnum string

const (
	WellnessSpaExceptionEnumExceptionUnspecified WellnessSpaExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessSpaExceptionEnumUnderConstruction    WellnessSpaExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessSpaExceptionEnumDependentOnSeason    WellnessSpaExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessSpaExceptionEnumDependentOnDayOfWeek WellnessSpaExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessTreadmillExceptionEnum string

const (
	WellnessTreadmillExceptionEnumExceptionUnspecified WellnessTreadmillExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessTreadmillExceptionEnumUnderConstruction    WellnessTreadmillExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessTreadmillExceptionEnumDependentOnSeason    WellnessTreadmillExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessTreadmillExceptionEnumDependentOnDayOfWeek WellnessTreadmillExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type WellnessWeightMachineExceptionEnum string

const (
	WellnessWeightMachineExceptionEnumExceptionUnspecified WellnessWeightMachineExceptionEnum = "EXCEPTION_UNSPECIFIED"
	WellnessWeightMachineExceptionEnumUnderConstruction    WellnessWeightMachineExceptionEnum = "UNDER_CONSTRUCTION"
	WellnessWeightMachineExceptionEnumDependentOnSeason    WellnessWeightMachineExceptionEnum = "DEPENDENT_ON_SEASON"
	WellnessWeightMachineExceptionEnumDependentOnDayOfWeek WellnessWeightMachineExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type Wellness struct {
	DoctorOnCall               *bool                                   `json:"doctorOnCall,omitempty"`
	DoctorOnCallException      *WellnessDoctorOnCallExceptionEnum      `json:"doctorOnCallException,omitempty"`
	EllipticalMachine          *bool                                   `json:"ellipticalMachine,omitempty"`
	EllipticalMachineException *WellnessEllipticalMachineExceptionEnum `json:"ellipticalMachineException,omitempty"`
	FitnessCenter              *bool                                   `json:"fitnessCenter,omitempty"`
	FitnessCenterException     *WellnessFitnessCenterExceptionEnum     `json:"fitnessCenterException,omitempty"`
	FreeFitnessCenter          *bool                                   `json:"freeFitnessCenter,omitempty"`
	FreeFitnessCenterException *WellnessFreeFitnessCenterExceptionEnum `json:"freeFitnessCenterException,omitempty"`
	FreeWeights                *bool                                   `json:"freeWeights,omitempty"`
	FreeWeightsException       *WellnessFreeWeightsExceptionEnum       `json:"freeWeightsException,omitempty"`
	Massage                    *bool                                   `json:"massage,omitempty"`
	MassageException           *WellnessMassageExceptionEnum           `json:"massageException,omitempty"`
	Salon                      *bool                                   `json:"salon,omitempty"`
	SalonException             *WellnessSalonExceptionEnum             `json:"salonException,omitempty"`
	Sauna                      *bool                                   `json:"sauna,omitempty"`
	SaunaException             *WellnessSaunaExceptionEnum             `json:"saunaException,omitempty"`
	Spa                        *bool                                   `json:"spa,omitempty"`
	SpaException               *WellnessSpaExceptionEnum               `json:"spaException,omitempty"`
	Treadmill                  *bool                                   `json:"treadmill,omitempty"`
	TreadmillException         *WellnessTreadmillExceptionEnum         `json:"treadmillException,omitempty"`
	WeightMachine              *bool                                   `json:"weightMachine,omitempty"`
	WeightMachineException     *WellnessWeightMachineExceptionEnum     `json:"weightMachineException,omitempty"`
}
