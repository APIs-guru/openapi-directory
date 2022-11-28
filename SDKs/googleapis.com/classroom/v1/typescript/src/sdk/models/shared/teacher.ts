import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";



// Teacher
/** 
 * Teacher of a course.
**/
export class Teacher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserProfile;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
