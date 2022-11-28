import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1LakeMetastoreStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    None = "NONE",
    Ready = "READY",
    Updating = "UPDATING",
    Error = "ERROR"
}


// GoogleCloudDataplexV1LakeMetastoreStatus
/** 
 * Status of Lake and Dataproc Metastore service instance association.
**/
export class GoogleCloudDataplexV1LakeMetastoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
