import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MatterPermission } from "./matterpermission";
export declare enum MatterStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Open = "OPEN",
    Closed = "CLOSED",
    Deleted = "DELETED"
}
/**
 * Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
export declare class Matter extends SpeakeasyBase {
    description?: string;
    matterId?: string;
    matterPermissions?: MatterPermission[];
    name?: string;
    state?: MatterStateEnum;
}
