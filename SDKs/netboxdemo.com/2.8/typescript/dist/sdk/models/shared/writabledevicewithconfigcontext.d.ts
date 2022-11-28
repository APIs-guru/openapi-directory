import { SpeakeasyBase } from "../../../internal/utils";
import { NestedDeviceInput } from "./nesteddevice";
export declare enum WritableDeviceWithConfigContextRackFaceEnum {
    Front = "front",
    Rear = "rear"
}
export declare enum WritableDeviceWithConfigContextStatusEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Inventory = "inventory",
    Decommissioning = "decommissioning"
}
export declare class WritableDeviceWithConfigContextInput extends SpeakeasyBase {
    assetTag?: string;
    cluster?: number;
    comments?: string;
    customFields?: Map<string, any>;
    deviceRole: number;
    deviceType: number;
    face?: WritableDeviceWithConfigContextRackFaceEnum;
    localContextData?: string;
    name?: string;
    parentDevice?: NestedDeviceInput;
    platform?: number;
    position?: number;
    primaryIp4?: number;
    primaryIp6?: number;
    rack?: number;
    serial?: string;
    site: number;
    status?: WritableDeviceWithConfigContextStatusEnum;
    tags?: string[];
    tenant?: number;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: number;
}
