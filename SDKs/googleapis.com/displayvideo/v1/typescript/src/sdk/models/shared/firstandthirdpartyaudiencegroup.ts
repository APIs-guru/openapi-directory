import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstAndThirdPartyAudienceTargetingSetting } from "./firstandthirdpartyaudiencetargetingsetting";



// FirstAndThirdPartyAudienceGroup
/** 
 * Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
**/
export class FirstAndThirdPartyAudienceGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings", elemType: FirstAndThirdPartyAudienceTargetingSetting })
  settings?: FirstAndThirdPartyAudienceTargetingSetting[];
}
