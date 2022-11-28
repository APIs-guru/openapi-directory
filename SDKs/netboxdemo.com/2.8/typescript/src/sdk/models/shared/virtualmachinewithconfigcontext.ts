import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";


export enum VirtualMachineWithConfigContextStatusLabelEnum {
    Offline = "Offline",
    Active = "Active",
    Planned = "Planned",
    Staged = "Staged",
    Failed = "Failed",
    Decommissioning = "Decommissioning"
}

export enum VirtualMachineWithConfigContextStatusValueEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Decommissioning = "decommissioning"
}


export class VirtualMachineWithConfigContextStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: VirtualMachineWithConfigContextStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: VirtualMachineWithConfigContextStatusValueEnum;
}


export class VirtualMachineWithConfigContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: NestedCluster;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=config_context" })
  configContext?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform" })
  platform?: NestedPlatform;

  @SpeakeasyMetadata({ data: "json, name=primary_ip" })
  primaryIp?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=primary_ip4" })
  primaryIp4?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=primary_ip6" })
  primaryIp6?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: NestedDeviceRole;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VirtualMachineWithConfigContextStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
