import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleAudienceTargetingSetting } from "./googleaudiencetargetingsetting";



// GoogleAudienceGroup
/** 
 * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
**/
export class GoogleAudienceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings", elemType: GoogleAudienceTargetingSetting })
  settings?: GoogleAudienceTargetingSetting[];
}
