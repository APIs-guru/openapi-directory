import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiserTargetingConfig
/** 
 * Targeting settings related to ad serving of an advertiser.
**/
export class AdvertiserTargetingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exemptTvFromViewabilityTargeting" })
  exemptTvFromViewabilityTargeting?: boolean;
}
