import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";

export enum ModifyAnnouncementAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED"
,    AllStudents = "ALL_STUDENTS"
,    IndividualStudents = "INDIVIDUAL_STUDENTS"
}


// ModifyAnnouncementAssigneesRequest
/** 
 * Request to modify assignee mode and options of an announcement.
**/
export class ModifyAnnouncementAssigneesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assigneeMode" })
  assigneeMode?: ModifyAnnouncementAssigneesRequestAssigneeModeEnum;

  @Metadata({ data: "json, name=modifyIndividualStudentsOptions" })
  modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
