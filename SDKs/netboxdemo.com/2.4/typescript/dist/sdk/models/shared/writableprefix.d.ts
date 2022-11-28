import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritablePrefixInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    isPool?: boolean;
    prefix: string;
    role?: number;
    site?: number;
    status?: number;
    tags?: string[];
    tenant?: number;
    vlan?: number;
    vrf?: number;
}
