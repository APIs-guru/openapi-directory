import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAudienceTargetingSetting } from "./googleaudiencetargetingsetting";


// GoogleAudienceGroup
/** 
 * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
**/
export class GoogleAudienceGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings", elemType: shared.GoogleAudienceTargetingSetting })
  settings?: GoogleAudienceTargetingSetting[];
}
