import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedPlatform } from "./nestedplatform";
import { DeviceIpAddress } from "./deviceipaddress";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { DeviceVirtualChassis } from "./devicevirtualchassis";
export declare class DeviceFace extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class Device extends SpeakeasyBase {
    assetTag?: string;
    cluster?: NestedCluster;
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    deviceRole: NestedDeviceRole;
    deviceType: NestedDeviceType;
    displayName?: string;
    face?: DeviceFace;
    id?: number;
    lastUpdated?: Date;
    localContextData?: string;
    name?: string;
    parentDevice?: string;
    platform?: NestedPlatform;
    position?: number;
    primaryIp?: DeviceIpAddress;
    primaryIp4?: DeviceIpAddress;
    primaryIp6?: DeviceIpAddress;
    rack?: NestedRack;
    serial?: string;
    site: NestedSite;
    status?: DeviceStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: DeviceVirtualChassis;
}
