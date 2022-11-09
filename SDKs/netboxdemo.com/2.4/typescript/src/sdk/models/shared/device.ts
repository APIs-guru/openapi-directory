import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedPlatform } from "./nestedplatform";
import { DeviceIpAddress } from "./deviceipaddress";
import { DeviceIpAddress } from "./deviceipaddress";
import { DeviceIpAddress } from "./deviceipaddress";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { DeviceVirtualChassis } from "./devicevirtualchassis";


export class DeviceFace extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class DeviceStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: NestedCluster;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

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
  face?: DeviceFace;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_device" })
  parentDevice?: string;

  @Metadata({ data: "json, name=platform" })
  platform?: NestedPlatform;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=primary_ip" })
  primaryIp?: DeviceIpAddress;

  @Metadata({ data: "json, name=primary_ip4" })
  primaryIp4?: DeviceIpAddress;

  @Metadata({ data: "json, name=primary_ip6" })
  primaryIp6?: DeviceIpAddress;

  @Metadata({ data: "json, name=rack" })
  rack?: NestedRack;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: DeviceStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vc_position" })
  vcPosition?: number;

  @Metadata({ data: "json, name=vc_priority" })
  vcPriority?: number;

  @Metadata({ data: "json, name=virtual_chassis" })
  virtualChassis?: DeviceVirtualChassis;
}
