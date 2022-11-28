import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyIndividualStudentsOptions
/** 
 * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
**/
export class ModifyIndividualStudentsOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addStudentIds" })
  addStudentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=removeStudentIds" })
  removeStudentIds?: string[];
}
