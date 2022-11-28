package shared

type EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum string

const (
	EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnumExceptionUnspecified EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnumUnderConstruction    EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum = "UNDER_CONSTRUCTION"
	EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnumDependentOnSeason    EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum = "DEPENDENT_ON_SEASON"
	EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnumDependentOnDayOfWeek EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum string

const (
	EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnumExceptionUnspecified EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnumUnderConstruction    EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum = "UNDER_CONSTRUCTION"
	EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnumDependentOnSeason    EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum = "DEPENDENT_ON_SEASON"
	EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnumDependentOnDayOfWeek EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum string

const (
	EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnumExceptionUnspecified EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnumUnderConstruction    EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum = "UNDER_CONSTRUCTION"
	EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnumDependentOnSeason    EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum = "DEPENDENT_ON_SEASON"
	EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnumDependentOnDayOfWeek EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum string

const (
	EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnumExceptionUnspecified EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnumUnderConstruction    EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum = "UNDER_CONSTRUCTION"
	EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnumDependentOnSeason    EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum = "DEPENDENT_ON_SEASON"
	EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnumDependentOnDayOfWeek EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum string

const (
	EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnumExceptionUnspecified EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnumUnderConstruction    EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum = "UNDER_CONSTRUCTION"
	EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnumDependentOnSeason    EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum = "DEPENDENT_ON_SEASON"
	EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnumDependentOnDayOfWeek EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum string

const (
	EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnumExceptionUnspecified EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum = "EXCEPTION_UNSPECIFIED"
	EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnumUnderConstruction    EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum = "UNDER_CONSTRUCTION"
	EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnumDependentOnSeason    EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum = "DEPENDENT_ON_SEASON"
	EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnumDependentOnDayOfWeek EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// EnhancedCleaning
// Enhanced cleaning measures implemented by the hotel during COVID-19.
type EnhancedCleaning struct {
	CommercialGradeDisinfectantCleaning          *bool                                                             `json:"commercialGradeDisinfectantCleaning,omitempty"`
	CommercialGradeDisinfectantCleaningException *EnhancedCleaningCommercialGradeDisinfectantCleaningExceptionEnum `json:"commercialGradeDisinfectantCleaningException,omitempty"`
	CommonAreasEnhancedCleaning                  *bool                                                             `json:"commonAreasEnhancedCleaning,omitempty"`
	CommonAreasEnhancedCleaningException         *EnhancedCleaningCommonAreasEnhancedCleaningExceptionEnum         `json:"commonAreasEnhancedCleaningException,omitempty"`
	EmployeesTrainedCleaningProcedures           *bool                                                             `json:"employeesTrainedCleaningProcedures,omitempty"`
	EmployeesTrainedCleaningProceduresException  *EnhancedCleaningEmployeesTrainedCleaningProceduresExceptionEnum  `json:"employeesTrainedCleaningProceduresException,omitempty"`
	EmployeesTrainedThoroughHandWashing          *bool                                                             `json:"employeesTrainedThoroughHandWashing,omitempty"`
	EmployeesTrainedThoroughHandWashingException *EnhancedCleaningEmployeesTrainedThoroughHandWashingExceptionEnum `json:"employeesTrainedThoroughHandWashingException,omitempty"`
	EmployeesWearProtectiveEquipment             *bool                                                             `json:"employeesWearProtectiveEquipment,omitempty"`
	EmployeesWearProtectiveEquipmentException    *EnhancedCleaningEmployeesWearProtectiveEquipmentExceptionEnum    `json:"employeesWearProtectiveEquipmentException,omitempty"`
	GuestRoomsEnhancedCleaning                   *bool                                                             `json:"guestRoomsEnhancedCleaning,omitempty"`
	GuestRoomsEnhancedCleaningException          *EnhancedCleaningGuestRoomsEnhancedCleaningExceptionEnum          `json:"guestRoomsEnhancedCleaningException,omitempty"`
}
