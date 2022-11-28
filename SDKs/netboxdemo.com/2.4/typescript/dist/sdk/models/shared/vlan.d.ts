import { SpeakeasyBase } from "../../../internal/utils";
import { NestedVlanGroup } from "./nestedvlangroup";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export declare class VlanStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Vlan extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    displayName?: string;
    group?: NestedVlanGroup;
    id?: number;
    lastUpdated?: Date;
    name: string;
    role?: NestedRole;
    site?: NestedSite;
    status?: VlanStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vid: number;
}
