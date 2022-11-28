import { SpeakeasyBase } from "../../../internal/utils";
import { NestedTenant } from "./nestedtenant";
export declare class Vrf extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    displayName?: string;
    enforceUnique?: boolean;
    id?: number;
    ipaddressCount?: number;
    lastUpdated?: Date;
    name: string;
    prefixCount?: number;
    rd?: string;
    tags?: string[];
    tenant?: NestedTenant;
}
