import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVlan } from "./nestedvlan";
import { NestedVrf } from "./nestedvrf";
export declare class PrefixStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Prefix extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    family?: number;
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
