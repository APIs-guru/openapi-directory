import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
import { DriveFolder } from "./drivefolder";
/**
 * Student in a course.
**/
export declare class Student extends SpeakeasyBase {
    courseId?: string;
    profile?: UserProfile;
    studentWorkFolder?: DriveFolder;
    userId?: string;
}
