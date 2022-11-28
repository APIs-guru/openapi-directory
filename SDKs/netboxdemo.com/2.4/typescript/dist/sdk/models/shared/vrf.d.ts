import { SpeakeasyBase } from "../../../internal/utils";
import { NestedTenant } from "./nestedtenant";
export declare class Vrf extends SpeakeasyBase {
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    displayName?: string;
    enforceUnique?: boolean;
    id?: number;
    lastUpdated?: Date;
    name: string;
    rd: string;
    tags?: string[];
    tenant?: NestedTenant;
}
