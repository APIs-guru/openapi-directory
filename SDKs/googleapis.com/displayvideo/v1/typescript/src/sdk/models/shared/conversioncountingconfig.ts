import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackingFloodlightActivityConfig } from "./trackingfloodlightactivityconfig";



// ConversionCountingConfig
/** 
 * Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
**/
export class ConversionCountingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivityConfigs", elemType: TrackingFloodlightActivityConfig })
  floodlightActivityConfigs?: TrackingFloodlightActivityConfig[];

  @SpeakeasyMetadata({ data: "json, name=postViewCountPercentageMillis" })
  postViewCountPercentageMillis?: string;
}
