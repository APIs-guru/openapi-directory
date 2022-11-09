import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";
export declare enum ModifyAnnouncementAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Request to modify assignee mode and options of an announcement.
**/
export declare class ModifyAnnouncementAssigneesRequest extends SpeakeasyBase {
    assigneeMode?: ModifyAnnouncementAssigneesRequestAssigneeModeEnum;
    modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
