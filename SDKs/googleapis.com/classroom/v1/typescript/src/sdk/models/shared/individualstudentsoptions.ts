import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IndividualStudentsOptions
/** 
 * Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
**/
export class IndividualStudentsOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=studentIds" })
  studentIds?: string[];
}
