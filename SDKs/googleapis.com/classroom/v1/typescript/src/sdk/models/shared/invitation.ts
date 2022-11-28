import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InvitationRoleEnum {
    CourseRoleUnspecified = "COURSE_ROLE_UNSPECIFIED",
    Student = "STUDENT",
    Teacher = "TEACHER",
    Owner = "OWNER"
}


// Invitation
/** 
 * An invitation to join a course.
**/
export class Invitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: InvitationRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
