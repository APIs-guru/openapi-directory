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
export declare class DeviceWithConfigContextFace extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceWithConfigContextStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class DeviceWithConfigContext extends SpeakeasyBase {
    assetTag?: string;
    cluster?: NestedCluster;
    comments?: string;
    configContext?: string;
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
    parentDevice?: string;
    platform?: NestedPlatform;
    position?: number;
    primaryIp?: DeviceIpAddress;
    primaryIp4?: DeviceIpAddress;
    primaryIp6?: DeviceIpAddress;
    rack?: NestedRack;
    serial?: string;
    site: NestedSite;
    status?: DeviceWithConfigContextStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcPosition?: number;
    vcPriority?: number;
    virtualChassis?: DeviceVirtualChassis;
}
