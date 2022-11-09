import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
export declare class GradeCategory extends SpeakeasyBase {
    defaultGradeDenominator?: number;
    id?: string;
    name?: string;
    weight?: number;
}
