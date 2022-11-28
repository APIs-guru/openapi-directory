import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1AssetResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ready = "READY",
    Error = "ERROR"
}


// GoogleCloudDataplexV1AssetResourceStatus
/** 
 * Status of the resource referenced by an asset.
**/
export class GoogleCloudDataplexV1AssetResourceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetResourceStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
