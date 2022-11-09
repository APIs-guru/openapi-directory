import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfile } from "./userprofile";
import { DriveFolder } from "./drivefolder";


// Student
/** 
 * Student in a course.
**/
export class Student extends SpeakeasyBase {
  @Metadata({ data: "json, name=courseId" })
  courseId?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: UserProfile;

  @Metadata({ data: "json, name=studentWorkFolder" })
  studentWorkFolder?: DriveFolder;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
