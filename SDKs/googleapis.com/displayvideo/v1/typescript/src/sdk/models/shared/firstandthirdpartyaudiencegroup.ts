import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstAndThirdPartyAudienceTargetingSetting } from "./firstandthirdpartyaudiencetargetingsetting";


// FirstAndThirdPartyAudienceGroup
/** 
 * Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
**/
export class FirstAndThirdPartyAudienceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings", elemType: shared.FirstAndThirdPartyAudienceTargetingSetting })
  settings?: FirstAndThirdPartyAudienceTargetingSetting[];
}
