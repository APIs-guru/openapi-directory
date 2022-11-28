import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GradeCategory
/** 
 * Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
export class GradeCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultGradeDenominator" })
  defaultGradeDenominator?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
