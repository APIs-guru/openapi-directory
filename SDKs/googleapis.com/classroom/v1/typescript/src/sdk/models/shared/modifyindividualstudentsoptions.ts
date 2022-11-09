import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyIndividualStudentsOptions
/** 
 * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
**/
export class ModifyIndividualStudentsOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=addStudentIds" })
  addStudentIds?: string[];

  @Metadata({ data: "json, name=removeStudentIds" })
  removeStudentIds?: string[];
}
