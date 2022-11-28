import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CombinedAudienceTargetingSetting } from "./combinedaudiencetargetingsetting";



// CombinedAudienceGroup
/** 
 * Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
**/
export class CombinedAudienceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings", elemType: CombinedAudienceTargetingSetting })
  settings?: CombinedAudienceTargetingSetting[];
}
