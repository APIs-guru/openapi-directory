import { SpeakeasyBase } from "../../../internal/utils";
import { NestedVlanGroup } from "./nestedvlangroup";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export declare enum VlanStatusLabelEnum {
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated"
}
export declare enum VlanStatusValueEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class VlanStatus extends SpeakeasyBase {
    label: VlanStatusLabelEnum;
    value: VlanStatusValueEnum;
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
    prefixCount?: number;
    role?: NestedRole;
    site?: NestedSite;
    status?: VlanStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vid: number;
}
