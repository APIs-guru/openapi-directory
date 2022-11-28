import { SpeakeasyBase } from "../../../internal/utils";
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
    createTime?: string;
    destroyTime?: string;
    name?: string;
    state?: SecretVersionStateEnum;
}
