import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedPlatform } from "./nestedplatform";
import { DeviceIpAddress } from "./deviceipaddress";
import { NestedRack } from "./nestedrack";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { DeviceVirtualChassis } from "./devicevirtualchassis";



export class DeviceFace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class DeviceStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: NestedCluster;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=device_role" })
  deviceRole: NestedDeviceRole;

  @SpeakeasyMetadata({ data: "json, name=device_type" })
  deviceType: NestedDeviceType;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=face" })
  face?: DeviceFace;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_device" })
  parentDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: NestedPlatform;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=primary_ip" })
  primaryIp?: DeviceIpAddress;

  @SpeakeasyMetadata({ data: "json, name=primary_ip4" })
  primaryIp4?: DeviceIpAddress;

  @SpeakeasyMetadata({ data: "json, name=primary_ip6" })
  primaryIp6?: DeviceIpAddress;

  @SpeakeasyMetadata({ data: "json, name=rack" })
  rack?: NestedRack;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DeviceStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vc_position" })
  vcPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=vc_priority" })
  vcPriority?: number;

  @SpeakeasyMetadata({ data: "json, name=virtual_chassis" })
  virtualChassis?: DeviceVirtualChassis;
}
