import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";
import { Asset } from "./asset";
import { TimeWindow } from "./timewindow";

export enum TemporalAssetPriorAssetStateEnum {
    PriorAssetStateUnspecified = "PRIOR_ASSET_STATE_UNSPECIFIED"
,    Present = "PRESENT"
,    Invalid = "INVALID"
,    DoesNotExist = "DOES_NOT_EXIST"
,    Deleted = "DELETED"
}


// TemporalAsset
/** 
 * An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
**/
export class TemporalAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: Asset;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=priorAsset" })
  priorAsset?: Asset;

  @Metadata({ data: "json, name=priorAssetState" })
  priorAssetState?: TemporalAssetPriorAssetStateEnum;

  @Metadata({ data: "json, name=window" })
  window?: TimeWindow;
}
