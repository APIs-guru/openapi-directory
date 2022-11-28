import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { TimeWindow } from "./timewindow";
export declare enum TemporalAssetPriorAssetStateEnum {
    PriorAssetStateUnspecified = "PRIOR_ASSET_STATE_UNSPECIFIED",
    Present = "PRESENT",
    Invalid = "INVALID",
    DoesNotExist = "DOES_NOT_EXIST",
    Deleted = "DELETED"
}
/**
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
**/
export declare class TemporalAsset extends SpeakeasyBase {
    asset?: Asset;
    deleted?: boolean;
    priorAsset?: Asset;
    priorAssetState?: TemporalAssetPriorAssetStateEnum;
    window?: TimeWindow;
}
