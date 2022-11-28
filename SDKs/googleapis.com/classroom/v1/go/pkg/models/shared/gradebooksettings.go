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

// GradebookSettings
// The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
type GradebookSettings struct {
	CalculationType *GradebookSettingsCalculationTypeEnum `json:"calculationType,omitempty"`
	DisplaySetting  *GradebookSettingsDisplaySettingEnum  `json:"displaySetting,omitempty"`
	GradeCategories []GradeCategory                       `json:"gradeCategories,omitempty"`
}
