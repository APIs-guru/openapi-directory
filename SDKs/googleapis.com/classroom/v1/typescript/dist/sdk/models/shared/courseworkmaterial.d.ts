import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
export declare enum CourseWorkMaterialAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
export declare enum CourseWorkMaterialStateEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
/**
 * Course work material created by a teacher for students of the course
**/
export declare class CourseWorkMaterial extends SpeakeasyBase {
    alternateLink?: string;
    assigneeMode?: CourseWorkMaterialAssigneeModeEnum;
    courseId?: string;
    creationTime?: string;
    creatorUserId?: string;
    description?: string;
    id?: string;
    individualStudentsOptions?: IndividualStudentsOptions;
    materials?: Material[];
    scheduledTime?: string;
    state?: CourseWorkMaterialStateEnum;
    title?: string;
    topicId?: string;
    updateTime?: string;
}
