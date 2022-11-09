import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1LakeMetastoreStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    None = "NONE"
,    Ready = "READY"
,    Updating = "UPDATING"
,    Error = "ERROR"
}


// GoogleCloudDataplexV1LakeMetastoreStatus
/** 
 * Status of Lake and Dataproc Metastore service instance association.
**/
export class GoogleCloudDataplexV1LakeMetastoreStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1LakeMetastoreStatusStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
