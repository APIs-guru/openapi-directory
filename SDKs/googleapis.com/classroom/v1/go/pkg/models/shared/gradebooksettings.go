package shared

type GradebookSettingsCalculationTypeEnum string

const (
	GradebookSettingsCalculationTypeEnumCalculationTypeUnspecified GradebookSettingsCalculationTypeEnum = "CALCULATION_TYPE_UNSPECIFIED"
	GradebookSettingsCalculationTypeEnumTotalPoints                GradebookSettingsCalculationTypeEnum = "TOTAL_POINTS"
	GradebookSettingsCalculationTypeEnumWeightedCategories         GradebookSettingsCalculationTypeEnum = "WEIGHTED_CATEGORIES"
)

type GradebookSettingsDisplaySettingEnum string

const (
	GradebookSettingsDisplaySettingEnumDisplaySettingUnspecified GradebookSettingsDisplaySettingEnum = "DISPLAY_SETTING_UNSPECIFIED"
	GradebookSettingsDisplaySettingEnumShowOverallGrade          GradebookSettingsDisplaySettingEnum = "SHOW_OVERALL_GRADE"
	GradebookSettingsDisplaySettingEnumHideOverallGrade          GradebookSettingsDisplaySettingEnum = "HIDE_OVERALL_GRADE"
	GradebookSettingsDisplaySettingEnumShowTeachersOnly          GradebookSettingsDisplaySettingEnum = "SHOW_TEACHERS_ONLY"
)

type GradebookSettings struct {
	CalculationType *GradebookSettingsCalculationTypeEnum `json:"calculationType,omitempty"`
	DisplaySetting  *GradebookSettingsDisplaySettingEnum  `json:"displaySetting,omitempty"`
	GradeCategories []GradeCategory                       `json:"gradeCategories,omitempty"`
}
