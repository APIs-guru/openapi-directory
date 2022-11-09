import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";
export declare enum ModifyCourseWorkAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Request to modify assignee mode and options of a coursework.
**/
export declare class ModifyCourseWorkAssigneesRequest extends SpeakeasyBase {
    assigneeMode?: ModifyCourseWorkAssigneesRequestAssigneeModeEnum;
    modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
