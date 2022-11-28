import { SpeakeasyBase } from "../../../internal/utils";
import { OnPremDomainSidDetails } from "./onpremdomainsiddetails";
export declare enum CheckMigrationPermissionResponseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    NeedsMaintenance = "NEEDS_MAINTENANCE"
}
/**
 * CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method.
**/
export declare class CheckMigrationPermissionResponse extends SpeakeasyBase {
    onpremDomains?: OnPremDomainSidDetails[];
    state?: CheckMigrationPermissionResponseStateEnum;
}
