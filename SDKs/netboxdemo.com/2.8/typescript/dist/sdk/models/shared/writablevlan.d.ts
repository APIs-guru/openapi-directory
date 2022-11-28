import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableVlanStatusEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}
export declare class WritableVlanInput extends SpeakeasyBase {
    customFields?: Map<string, any>;
    description?: string;
    group?: number;
    name: string;
    role?: number;
    site?: number;
    status?: WritableVlanStatusEnum;
    tags?: string[];
    tenant?: number;
    vid: number;
}
