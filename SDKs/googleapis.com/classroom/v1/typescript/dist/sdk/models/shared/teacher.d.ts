import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
/**
 * Teacher of a course.
**/
export declare class Teacher extends SpeakeasyBase {
    courseId?: string;
    profile?: UserProfile;
    userId?: string;
}
