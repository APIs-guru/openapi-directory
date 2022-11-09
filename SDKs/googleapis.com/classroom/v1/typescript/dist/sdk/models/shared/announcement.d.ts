import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
export declare enum AnnouncementAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
export declare enum AnnouncementStateEnum {
    AnnouncementStateUnspecified = "ANNOUNCEMENT_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
/**
 * Announcement created by a teacher for students of the course
**/
export declare class Announcement extends SpeakeasyBase {
    alternateLink?: string;
    assigneeMode?: AnnouncementAssigneeModeEnum;
    courseId?: string;
    creationTime?: string;
    creatorUserId?: string;
    id?: string;
    individualStudentsOptions?: IndividualStudentsOptions;
    materials?: Material[];
    scheduledTime?: string;
    state?: AnnouncementStateEnum;
    text?: string;
    updateTime?: string;
}
