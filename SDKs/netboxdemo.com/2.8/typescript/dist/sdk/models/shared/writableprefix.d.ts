import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritablePrefixStatusEnum {
    Container = "container",
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class WritablePrefixInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    isPool?: boolean;
    prefix: string;
    role?: number;
    site?: number;
    status?: WritablePrefixStatusEnum;
    tags?: string[];
    tenant?: number;
    vlan?: number;
    vrf?: number;
}
