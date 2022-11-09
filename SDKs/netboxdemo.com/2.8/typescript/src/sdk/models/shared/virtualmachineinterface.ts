import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NestedVlan } from "./nestedvlan";
import { NestedVlan } from "./nestedvlan";
import { NestedVirtualMachine } from "./nestedvirtualmachine";

export enum VirtualMachineInterfaceModeLabelEnum {
    Access = "Access"
,    Tagged = "Tagged"
,    TaggedAll = "Tagged (All)"
}

export enum VirtualMachineInterfaceModeValueEnum {
    Access = "access"
,    Tagged = "tagged"
,    TaggedAll = "tagged-all"
}


export class VirtualMachineInterfaceMode extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: VirtualMachineInterfaceModeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: VirtualMachineInterfaceModeValueEnum;
}

export enum VirtualMachineInterfaceTypeLabelEnum {
    Virtual = "Virtual"
}

export enum VirtualMachineInterfaceTypeValueEnum {
    Virtual = "virtual"
}


export class VirtualMachineInterfaceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: VirtualMachineInterfaceTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: VirtualMachineInterfaceTypeValueEnum;
}


export class VirtualMachineInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: VirtualMachineInterfaceMode;

  @Metadata({ data: "json, name=mtu" })
  mtu?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tagged_vlans", elemType: shared.NestedVlan })
  taggedVlans?: NestedVlan[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: VirtualMachineInterfaceType;

  @Metadata({ data: "json, name=untagged_vlan" })
  untaggedVlan?: NestedVlan;

  @Metadata({ data: "json, name=virtual_machine" })
  virtualMachine: NestedVirtualMachine;
}
