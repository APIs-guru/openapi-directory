import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatus } from "./replicationstatus";
export declare enum SecretVersionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Destroyed = "DESTROYED"
}
/**
 * A secret version resource in the Secret Manager API.
**/
export declare class SecretVersion extends SpeakeasyBase {
    clientSpecifiedPayloadChecksum?: boolean;
    createTime?: string;
    destroyTime?: string;
    etag?: string;
    name?: string;
    replicationStatus?: ReplicationStatus;
    state?: SecretVersionStateEnum;
}
