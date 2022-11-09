import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserProfile } from "./userprofile";


// Guardian
/** 
 * Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
**/
export class Guardian extends SpeakeasyBase {
  @Metadata({ data: "json, name=guardianId" })
  guardianId?: string;

  @Metadata({ data: "json, name=guardianProfile" })
  guardianProfile?: UserProfile;

  @Metadata({ data: "json, name=invitedEmailAddress" })
  invitedEmailAddress?: string;

  @Metadata({ data: "json, name=studentId" })
  studentId?: string;
}
