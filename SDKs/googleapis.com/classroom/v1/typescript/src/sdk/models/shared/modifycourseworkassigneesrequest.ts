import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";

export enum ModifyCourseWorkAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED"
,    AllStudents = "ALL_STUDENTS"
,    IndividualStudents = "INDIVIDUAL_STUDENTS"
}


// ModifyCourseWorkAssigneesRequest
/** 
 * Request to modify assignee mode and options of a coursework.
**/
export class ModifyCourseWorkAssigneesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigneeMode" })
  assigneeMode?: ModifyCourseWorkAssigneesRequestAssigneeModeEnum;

  @Metadata({ data: "json, name=modifyIndividualStudentsOptions" })
  modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
