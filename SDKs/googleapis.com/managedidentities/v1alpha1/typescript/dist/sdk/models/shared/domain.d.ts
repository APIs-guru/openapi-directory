import { SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";
export declare enum DomainStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    PerformingMaintenance = "PERFORMING_MAINTENANCE",
    Down = "DOWN"
}
/**
 * If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class Domain extends SpeakeasyBase {
    auditLogsEnabled?: boolean;
    authorizedNetworks?: string[];
    createTime?: string;
    fqdn?: string;
    labels?: Map<string, string>;
    locations?: string[];
    managedIdentitiesAdminName?: string;
    name?: string;
    reservedIpRange?: string;
    state?: DomainStateEnum;
    statusMessage?: string;
    trusts?: Trust[];
    updateTime?: string;
}
