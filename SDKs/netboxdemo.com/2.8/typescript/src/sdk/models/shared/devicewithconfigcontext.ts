import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedDevice } from "./nesteddevice";
import { NestedPlatform } from "./nestedplatform";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVirtualChassis } from "./nestedvirtualchassis";

export enum DeviceWithConfigContextFaceLabelEnum {
    Front = "Front"
,    Rear = "Rear"
}

export enum DeviceWithConfigContextFaceValueEnum {
    Front = "front"
,    Rear = "rear"
}


export class DeviceWithConfigContextFace extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: DeviceWithConfigContextFaceLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: DeviceWithConfigContextFaceValueEnum;
}

export enum DeviceWithConfigContextStatusLabelEnum {
    Offline = "Offline"
,    Active = "Active"
,    Planned = "Planned"
,    Staged = "Staged"
,    Failed = "Failed"
,    Inventory = "Inventory"
,    Decommissioning = "Decommissioning"
}

export enum DeviceWithConfigContextStatusValueEnum {
    Offline = "offline"
,    Active = "active"
,    Planned = "planned"
,    Staged = "staged"
,    Failed = "failed"
,    Inventory = "inventory"
,    Decommissioning = "decommissioning"
}


export class DeviceWithConfigContextStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: DeviceWithConfigContextStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: DeviceWithConfigContextStatusValueEnum;
}


export class DeviceWithConfigContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: NestedCluster;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=config_context" })
  configContext?: Map<string, string>;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=device_role" })
  deviceRole: NestedDeviceRole;

  @Metadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=face" })
  face?: DeviceWithConfigContextFace;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_device" })
  parentDevice?: NestedDevice;

  @Metadata({ data: "json, name=platform" })
  platform?: NestedPlatform;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=primary_ip" })
  primaryIp?: NestedIpAddress;

  @Metadata({ data: "json, name=primary_ip4" })
  primaryIp4?: NestedIpAddress;

  @Metadata({ data: "json, name=primary_ip6" })
  primaryIp6?: NestedIpAddress;

  @Metadata({ data: "json, name=rack" })
  rack?: NestedRack;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: DeviceWithConfigContextStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vc_position" })
  vcPosition?: number;

  @Metadata({ data: "json, name=vc_priority" })
  vcPriority?: number;

  @Metadata({ data: "json, name=virtual_chassis" })
  virtualChassis?: NestedVirtualChassis;
}
