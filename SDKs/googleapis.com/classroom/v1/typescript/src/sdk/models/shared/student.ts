import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
import { DriveFolder } from "./drivefolder";



// Student
/** 
 * Student in a course.
**/
export class Student extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=courseId" })
  courseId?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: UserProfile;

  @SpeakeasyMetadata({ data: "json, name=studentWorkFolder" })
  studentWorkFolder?: DriveFolder;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
