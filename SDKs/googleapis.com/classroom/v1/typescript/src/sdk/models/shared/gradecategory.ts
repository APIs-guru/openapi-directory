import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GradeCategory
/** 
 * Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
export class GradeCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultGradeDenominator" })
  defaultGradeDenominator?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
