import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";



// Guardian
/** 
 * Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
**/
export class Guardian extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guardianId" })
  guardianId?: string;

  @SpeakeasyMetadata({ data: "json, name=guardianProfile" })
  guardianProfile?: UserProfile;

  @SpeakeasyMetadata({ data: "json, name=invitedEmailAddress" })
  invitedEmailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=studentId" })
  studentId?: string;
}
