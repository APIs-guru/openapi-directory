import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedVlan } from "./nestedvlan";
import { NestedVirtualMachine } from "./nestedvirtualmachine";


export enum VirtualMachineInterfaceModeLabelEnum {
    Access = "Access",
    Tagged = "Tagged",
    TaggedAll = "Tagged (All)"
}

export enum VirtualMachineInterfaceModeValueEnum {
    Access = "access",
    Tagged = "tagged",
    TaggedAll = "tagged-all"
}


export class VirtualMachineInterfaceMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: VirtualMachineInterfaceModeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: VirtualMachineInterfaceModeValueEnum;
}

export enum VirtualMachineInterfaceTypeLabelEnum {
    Virtual = "Virtual"
}

export enum VirtualMachineInterfaceTypeValueEnum {
    Virtual = "virtual"
}


export class VirtualMachineInterfaceType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: VirtualMachineInterfaceTypeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: VirtualMachineInterfaceTypeValueEnum;
}


export class VirtualMachineInterface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: VirtualMachineInterfaceMode;

  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tagged_vlans", elemType: NestedVlan })
  taggedVlans?: NestedVlan[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VirtualMachineInterfaceType;

  @SpeakeasyMetadata({ data: "json, name=untagged_vlan" })
  untaggedVlan?: NestedVlan;

  @SpeakeasyMetadata({ data: "json, name=virtual_machine" })
  virtualMachine: NestedVirtualMachine;
}
