import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";

export enum VirtualMachineWithConfigContextStatusLabelEnum {
    Offline = "Offline"
,    Active = "Active"
,    Planned = "Planned"
,    Staged = "Staged"
,    Failed = "Failed"
,    Decommissioning = "Decommissioning"
}

export enum VirtualMachineWithConfigContextStatusValueEnum {
    Offline = "offline"
,    Active = "active"
,    Planned = "planned"
,    Staged = "staged"
,    Failed = "failed"
,    Decommissioning = "decommissioning"
}


export class VirtualMachineWithConfigContextStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: VirtualMachineWithConfigContextStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: VirtualMachineWithConfigContextStatusValueEnum;
}


export class VirtualMachineWithConfigContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: NestedCluster;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=config_context" })
  configContext?: Map<string, string>;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=disk" })
  disk?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platform" })
  platform?: NestedPlatform;

  @Metadata({ data: "json, name=primary_ip" })
  primaryIp?: NestedIpAddress;

  @Metadata({ data: "json, name=primary_ip4" })
  primaryIp4?: NestedIpAddress;

  @Metadata({ data: "json, name=primary_ip6" })
  primaryIp6?: NestedIpAddress;

  @Metadata({ data: "json, name=role" })
  role?: NestedDeviceRole;

  @Metadata({ data: "json, name=site" })
  site?: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: VirtualMachineWithConfigContextStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
