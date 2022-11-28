import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVlan } from "./nestedvlan";
import { NestedVrf } from "./nestedvrf";
export declare enum PrefixFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
export declare class PrefixFamily extends SpeakeasyBase {
    label: PrefixFamilyLabelEnum;
    value: number;
}
export declare enum PrefixStatusLabelEnum {
    Container = "Container",
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated"
}
export declare enum PrefixStatusValueEnum {
    Container = "container",
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class PrefixStatus extends SpeakeasyBase {
    label: PrefixStatusLabelEnum;
    value: PrefixStatusValueEnum;
}
export declare class Prefix extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    family?: PrefixFamily;
    id?: number;
    isPool?: boolean;
    lastUpdated?: Date;
    prefix: string;
    role?: NestedRole;
    site?: NestedSite;
    status?: PrefixStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vlan?: NestedVlan;
    vrf?: NestedVrf;
}
