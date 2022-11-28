import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableVlanInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    group?: number;
    name: string;
    role?: number;
    site?: number;
    status?: number;
    tags?: string[];
    tenant?: number;
    vid: number;
}
