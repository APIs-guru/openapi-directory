import { SpeakeasyBase } from "../../../internal/utils";
import { NestedVlan } from "./nestedvlan";
import { NestedVirtualMachine } from "./nestedvirtualmachine";
export declare enum VirtualMachineInterfaceModeLabelEnum {
    Access = "Access",
    Tagged = "Tagged",
    TaggedAll = "Tagged (All)"
}
export declare enum VirtualMachineInterfaceModeValueEnum {
    Access = "access",
    Tagged = "tagged",
    TaggedAll = "tagged-all"
}
export declare class VirtualMachineInterfaceMode extends SpeakeasyBase {
    label: VirtualMachineInterfaceModeLabelEnum;
    value: VirtualMachineInterfaceModeValueEnum;
}
export declare enum VirtualMachineInterfaceTypeLabelEnum {
    Virtual = "Virtual"
}
export declare enum VirtualMachineInterfaceTypeValueEnum {
    Virtual = "virtual"
}
export declare class VirtualMachineInterfaceType extends SpeakeasyBase {
    label: VirtualMachineInterfaceTypeLabelEnum;
    value: VirtualMachineInterfaceTypeValueEnum;
}
export declare class VirtualMachineInterface extends SpeakeasyBase {
    description?: string;
    enabled?: boolean;
    id?: number;
    macAddress?: string;
    mode?: VirtualMachineInterfaceMode;
    mtu?: number;
    name: string;
    taggedVlans?: NestedVlan[];
    tags?: string[];
    type?: VirtualMachineInterfaceType;
    untaggedVlan?: NestedVlan;
    virtualMachine: NestedVirtualMachine;
}
