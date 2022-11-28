import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableIpAddressInput extends SpeakeasyBase {
    address: string;
    customFields?: Map<string, any>;
    description?: string;
    interface?: number;
    natInside?: number;
    natOutside: number;
    role?: number;
    status?: number;
    tags?: string[];
    tenant?: number;
    vrf?: number;
}
