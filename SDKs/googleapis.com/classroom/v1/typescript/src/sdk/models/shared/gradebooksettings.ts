import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GradeCategory } from "./gradecategory";


export enum GradebookSettingsCalculationTypeEnum {
    CalculationTypeUnspecified = "CALCULATION_TYPE_UNSPECIFIED",
    TotalPoints = "TOTAL_POINTS",
    WeightedCategories = "WEIGHTED_CATEGORIES"
}

export enum GradebookSettingsDisplaySettingEnum {
    DisplaySettingUnspecified = "DISPLAY_SETTING_UNSPECIFIED",
    ShowOverallGrade = "SHOW_OVERALL_GRADE",
    HideOverallGrade = "HIDE_OVERALL_GRADE",
    ShowTeachersOnly = "SHOW_TEACHERS_ONLY"
}


// GradebookSettings
/** 
 * The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
export class GradebookSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calculationType" })
  calculationType?: GradebookSettingsCalculationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displaySetting" })
  displaySetting?: GradebookSettingsDisplaySettingEnum;

  @SpeakeasyMetadata({ data: "json, name=gradeCategories", elemType: GradeCategory })
  gradeCategories?: GradeCategory[];
}
