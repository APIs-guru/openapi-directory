import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { TimeWindow } from "./timewindow";


export enum TemporalAssetPriorAssetStateEnum {
    PriorAssetStateUnspecified = "PRIOR_ASSET_STATE_UNSPECIFIED",
    Present = "PRESENT",
    Invalid = "INVALID",
    DoesNotExist = "DOES_NOT_EXIST",
    Deleted = "DELETED"
}


// TemporalAsset
/** 
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
**/
export class TemporalAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: Asset;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priorAsset" })
  priorAsset?: Asset;

  @SpeakeasyMetadata({ data: "json, name=priorAssetState" })
  priorAssetState?: TemporalAssetPriorAssetStateEnum;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window?: TimeWindow;
}
