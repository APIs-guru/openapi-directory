import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedDevice } from "./nesteddevice";
import { NestedPlatform } from "./nestedplatform";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVirtualChassis } from "./nestedvirtualchassis";
export declare enum DeviceWithConfigContextFaceLabelEnum {
    Front = "Front",
    Rear = "Rear"
}
export declare enum DeviceWithConfigContextFaceValueEnum {
    Front = "front",
    Rear = "rear"
}
export declare class DeviceWithConfigContextFace extends SpeakeasyBase {
    label: DeviceWithConfigContextFaceLabelEnum;
    value: DeviceWithConfigContextFaceValueEnum;
}
export declare enum DeviceWithConfigContextStatusLabelEnum {
    Offline = "Offline",
    Active = "Active",
    Planned = "Planned",
    Staged = "Staged",
    Failed = "Failed",
    Inventory = "Inventory",
    Decommissioning = "Decommissioning"
}
export declare enum DeviceWithConfigContextStatusValueEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Inventory = "inventory",
    Decommissioning = "decommissioning"
}
export declare class DeviceWithConfigContextStatus extends SpeakeasyBase {
    label: DeviceWithConfigContextStatusLabelEnum;
    value: DeviceWithConfigContextStatusValueEnum;
}
export declare class DeviceWithConfigContext extends SpeakeasyBase {
    assetTag?: string;
    cluster?: NestedCluster;
    comments?: string;
    configContext?: Map<string, string>;
    created?: Date;
    customFields?: Map<string, any>;
    deviceRole: NestedDeviceRole;
    deviceType: NestedDeviceType;
    displayName?: string;
    face?: DeviceWithConfigContextFace;
    id?: number;
    lastUpdated?: Date;
    localContextData?: string;
    name?: string;
    parentDevice?: NestedDevice;
    platform?: NestedPlatform;
    position?: number;
    primaryIp?: NestedIpAddress;
    primaryIp4?: NestedIpAddress;
    primaryIp6?: NestedIpAddress;
    rack?: NestedRack;
    serial?: string;
    site: NestedSite;
    status?: DeviceWithConfigContextStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: NestedVirtualChassis;
}
