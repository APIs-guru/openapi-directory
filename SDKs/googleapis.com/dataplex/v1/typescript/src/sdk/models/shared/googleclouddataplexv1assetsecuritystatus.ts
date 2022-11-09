import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1AssetSecurityStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Ready = "READY"
,    Applying = "APPLYING"
,    Error = "ERROR"
}


// GoogleCloudDataplexV1AssetSecurityStatus
/** 
 * Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.
**/
export class GoogleCloudDataplexV1AssetSecurityStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDataplexV1AssetSecurityStatusStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
