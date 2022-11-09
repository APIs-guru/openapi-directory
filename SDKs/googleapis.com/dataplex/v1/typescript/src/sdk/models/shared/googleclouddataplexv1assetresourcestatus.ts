import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1AssetResourceStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Ready = "READY"
,    Error = "ERROR"
}


// GoogleCloudDataplexV1AssetResourceStatus
/** 
 * Status of the resource referenced by an asset.
**/
export class GoogleCloudDataplexV1AssetResourceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetResourceStatusStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
