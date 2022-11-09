import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfile } from "./userprofile";


// Teacher
/** 
 * Teacher of a course.
**/
export class Teacher extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: UserProfile;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
