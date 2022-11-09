import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CombinedAudienceTargetingSetting
/** 
 * Details of combined audience targeting setting.
**/
export class CombinedAudienceTargetingSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=combinedAudienceId" })
  combinedAudienceId?: string;
}
