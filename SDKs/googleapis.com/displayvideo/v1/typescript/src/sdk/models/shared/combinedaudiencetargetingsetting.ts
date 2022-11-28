import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CombinedAudienceTargetingSetting
/** 
 * Details of combined audience targeting setting.
**/
export class CombinedAudienceTargetingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combinedAudienceId" })
  combinedAudienceId?: string;
}
