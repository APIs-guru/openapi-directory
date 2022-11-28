import { SpeakeasyBase } from "../../../internal/utils";
import { TrackingFloodlightActivityConfig } from "./trackingfloodlightactivityconfig";
/**
 * Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.
**/
export declare class ConversionCountingConfig extends SpeakeasyBase {
    floodlightActivityConfigs?: TrackingFloodlightActivityConfig[];
    postViewCountPercentageMillis?: string;
}
