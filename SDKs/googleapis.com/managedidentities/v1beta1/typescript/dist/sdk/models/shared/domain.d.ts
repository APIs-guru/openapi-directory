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
    Unavailable = "UNAVAILABLE"
}
/**
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class Domain extends SpeakeasyBase {
    admin?: string;
    auditLogsEnabled?: boolean;
    authorizedNetworks?: string[];
    createTime?: string;
    fqdn?: string;
    labels?: Map<string, string>;
    locations?: string[];
    name?: string;
    reservedIpRange?: string;
    state?: DomainStateEnum;
    statusMessage?: string;
    trusts?: Trust[];
    updateTime?: string;
}
/**
 * Represents a managed Microsoft Active Directory domain. If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class DomainInput extends SpeakeasyBase {
    admin?: string;
    auditLogsEnabled?: boolean;
    authorizedNetworks?: string[];
    labels?: Map<string, string>;
    locations?: string[];
    reservedIpRange?: string;
}
