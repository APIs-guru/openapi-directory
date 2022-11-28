import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
**/
export declare class CustomViewabilityMetricConfiguration extends SpeakeasyBase {
    audible?: boolean;
    timeMillis?: number;
    timePercent?: number;
    viewabilityPercent?: number;
}
