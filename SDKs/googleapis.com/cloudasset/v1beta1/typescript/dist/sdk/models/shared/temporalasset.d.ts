import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { TimeWindow } from "./timewindow";
/**
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
**/
export declare class TemporalAsset extends SpeakeasyBase {
    asset?: Asset;
    deleted?: boolean;
    window?: TimeWindow;
}
