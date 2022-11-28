import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatus } from "./replicationstatus";


export enum SecretVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Destroyed = "DESTROYED"
}


// SecretVersion
/** 
 * A secret version resource in the Secret Manager API.
**/
export class SecretVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSpecifiedPayloadChecksum" })
  clientSpecifiedPayloadChecksum?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=destroyTime" })
  destroyTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationStatus" })
  replicationStatus?: ReplicationStatus;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SecretVersionStateEnum;
}
