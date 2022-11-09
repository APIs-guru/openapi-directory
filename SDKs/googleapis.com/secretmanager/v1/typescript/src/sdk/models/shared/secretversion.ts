import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationStatus } from "./replicationstatus";

export enum SecretVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Destroyed = "DESTROYED"
}


// SecretVersion
/** 
 * A secret version resource in the Secret Manager API.
**/
export class SecretVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSpecifiedPayloadChecksum" })
  clientSpecifiedPayloadChecksum?: boolean;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=destroyTime" })
  destroyTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=replicationStatus" })
  replicationStatus?: ReplicationStatus;

  @Metadata({ data: "json, name=state" })
  state?: SecretVersionStateEnum;
}
