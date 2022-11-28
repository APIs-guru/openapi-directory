import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that control the behavior of a single Floodlight activity config.
**/
export declare class TrackingFloodlightActivityConfig extends SpeakeasyBase {
    floodlightActivityId?: string;
    postClickLookbackWindowDays?: number;
    postViewLookbackWindowDays?: number;
}
