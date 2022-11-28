import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAudienceTargetingSetting
/** 
 * Details of Google audience targeting setting.
**/
export class GoogleAudienceTargetingSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleAudienceId" })
  googleAudienceId?: string;
}
