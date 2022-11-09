import { SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfile } from "./userprofile";
/**
 * Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
**/
export declare class Guardian extends SpeakeasyBase {
    guardianId?: string;
    guardianProfile?: UserProfile;
    invitedEmailAddress?: string;
    studentId?: string;
}
