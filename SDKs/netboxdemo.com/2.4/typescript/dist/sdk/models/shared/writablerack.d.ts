import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableRackInput extends SpeakeasyBase {
    comments?: string;
    customFields?: Map<string, any>;
    descUnits?: boolean;
    facilityId?: string;
    group?: number;
    name: string;
    role?: number;
    serial?: string;
    site: number;
    tags?: string[];
    tenant?: number;
    type?: number;
    uHeight?: number;
    width?: number;
}
