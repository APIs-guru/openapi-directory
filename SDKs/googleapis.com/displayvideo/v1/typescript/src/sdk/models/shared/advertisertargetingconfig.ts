import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdvertiserTargetingConfig
/** 
 * Targeting settings related to ad serving of an advertiser.
**/
export class AdvertiserTargetingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exemptTvFromViewabilityTargeting" })
  exemptTvFromViewabilityTargeting?: boolean;
}
