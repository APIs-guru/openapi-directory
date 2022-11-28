import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableDeviceInput extends SpeakeasyBase {
    assetTag?: string;
    cluster?: number;
    comments?: string;
    customFields?: Map<string, any>;
    deviceRole: number;
    deviceType: number;
    face?: number;
    localContextData?: string;
    name?: string;
    platform?: number;
    position?: number;
    primaryIp4?: number;
    primaryIp6?: number;
    rack?: number;
    serial?: string;
    site: number;
    status?: number;
    tags?: string[];
    tenant?: number;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: number;
}
