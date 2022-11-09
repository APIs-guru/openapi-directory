import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum InvitationRoleEnum {
    CourseRoleUnspecified = "COURSE_ROLE_UNSPECIFIED",
    Student = "STUDENT",
    Teacher = "TEACHER",
    Owner = "OWNER"
}
/**
 * An invitation to join a course.
**/
export declare class Invitation extends SpeakeasyBase {
    courseId?: string;
    id?: string;
    role?: InvitationRoleEnum;
    userId?: string;
}
