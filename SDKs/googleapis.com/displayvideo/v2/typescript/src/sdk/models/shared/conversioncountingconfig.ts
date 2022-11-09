import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrackingFloodlightActivityConfig } from "./trackingfloodlightactivityconfig";


// ConversionCountingConfig
/** 
 * Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
**/
export class ConversionCountingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivityConfigs", elemType: shared.TrackingFloodlightActivityConfig })
  floodlightActivityConfigs?: TrackingFloodlightActivityConfig[];

  @Metadata({ data: "json, name=postViewCountPercentageMillis" })
  postViewCountPercentageMillis?: string;
}
