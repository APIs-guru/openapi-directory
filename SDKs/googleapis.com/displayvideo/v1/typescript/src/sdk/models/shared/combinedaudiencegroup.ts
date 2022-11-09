import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CombinedAudienceTargetingSetting } from "./combinedaudiencetargetingsetting";


// CombinedAudienceGroup
/** 
 * Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
**/
export class CombinedAudienceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings", elemType: shared.CombinedAudienceTargetingSetting })
  settings?: CombinedAudienceTargetingSetting[];
}
