import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { VirtualMachineIpAddress } from "./virtualmachineipaddress";
import { VirtualMachineIpAddress } from "./virtualmachineipaddress";
import { VirtualMachineIpAddress } from "./virtualmachineipaddress";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";


export class VirtualMachineStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class VirtualMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: NestedCluster;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

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
  primaryIp?: VirtualMachineIpAddress;

  @Metadata({ data: "json, name=primary_ip4" })
  primaryIp4?: VirtualMachineIpAddress;

  @Metadata({ data: "json, name=primary_ip6" })
  primaryIp6?: VirtualMachineIpAddress;

  @Metadata({ data: "json, name=role" })
  role?: NestedDeviceRole;

  @Metadata({ data: "json, name=site" })
  site?: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: VirtualMachineStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
