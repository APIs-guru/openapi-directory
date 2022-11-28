import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { VirtualMachineIpAddress } from "./virtualmachineipaddress";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";



export class VirtualMachineStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class VirtualMachine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: NestedCluster;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

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
  primaryIp?: VirtualMachineIpAddress;

  @SpeakeasyMetadata({ data: "json, name=primary_ip4" })
  primaryIp4?: VirtualMachineIpAddress;

  @SpeakeasyMetadata({ data: "json, name=primary_ip6" })
  primaryIp6?: VirtualMachineIpAddress;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: NestedDeviceRole;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VirtualMachineStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
