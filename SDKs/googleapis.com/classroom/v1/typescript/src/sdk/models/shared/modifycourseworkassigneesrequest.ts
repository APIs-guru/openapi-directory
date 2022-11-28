import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";


export enum ModifyCourseWorkAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}


// ModifyCourseWorkAssigneesRequest
/** 
 * Request to modify assignee mode and options of a coursework.
**/
export class ModifyCourseWorkAssigneesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assigneeMode" })
  assigneeMode?: ModifyCourseWorkAssigneesRequestAssigneeModeEnum;

  @SpeakeasyMetadata({ data: "json, name=modifyIndividualStudentsOptions" })
  modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
