import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InvitationRoleEnum {
    CourseRoleUnspecified = "COURSE_ROLE_UNSPECIFIED"
,    Student = "STUDENT"
,    Teacher = "TEACHER"
,    Owner = "OWNER"
}


// Invitation
/** 
 * An invitation to join a course.
**/
export class Invitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=role" })
  role?: InvitationRoleEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
