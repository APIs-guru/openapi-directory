import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GradeCategory } from "./gradecategory";
export declare enum GradebookSettingsCalculationTypeEnum {
    CalculationTypeUnspecified = "CALCULATION_TYPE_UNSPECIFIED",
    TotalPoints = "TOTAL_POINTS",
    WeightedCategories = "WEIGHTED_CATEGORIES"
}
export declare enum GradebookSettingsDisplaySettingEnum {
    DisplaySettingUnspecified = "DISPLAY_SETTING_UNSPECIFIED",
    ShowOverallGrade = "SHOW_OVERALL_GRADE",
    HideOverallGrade = "HIDE_OVERALL_GRADE",
    ShowTeachersOnly = "SHOW_TEACHERS_ONLY"
}
/**
 * The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
export declare class GradebookSettings extends SpeakeasyBase {
    calculationType?: GradebookSettingsCalculationTypeEnum;
    displaySetting?: GradebookSettingsDisplaySettingEnum;
    gradeCategories?: GradeCategory[];
}
