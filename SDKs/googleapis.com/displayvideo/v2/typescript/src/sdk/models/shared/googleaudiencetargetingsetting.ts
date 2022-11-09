import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAudienceTargetingSetting
/** 
 * Details of Google audience targeting setting.
**/
export class GoogleAudienceTargetingSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleAudienceId" })
  googleAudienceId?: string;
}
