import { SpeakeasyBase } from "../../../internal/utils";
import { NestedTenantGroup } from "./nestedtenantgroup";
export declare class Tenant extends SpeakeasyBase {
    circuitCount?: number;
    clusterCount?: number;
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    deviceCount?: number;
    group?: NestedTenantGroup;
    id?: number;
    ipaddressCount?: number;
    lastUpdated?: Date;
    name: string;
    prefixCount?: number;
    rackCount?: number;
    siteCount?: number;
    slug: string;
    tags?: string[];
    virtualmachineCount?: number;
    vlanCount?: number;
    vrfCount?: number;
}
