import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachineConfigInput } from "./virtualmachineconfig";
import { VirtualMachineConfig } from "./virtualmachineconfig";
/**
 * Runtime using Virtual Machine for computing.
**/
export declare class VirtualMachineInput extends SpeakeasyBase {
    virtualMachineConfig?: VirtualMachineConfigInput;
}
/**
 * Runtime using Virtual Machine for computing.
**/
export declare class VirtualMachine extends SpeakeasyBase {
    instanceId?: string;
    instanceName?: string;
    virtualMachineConfig?: VirtualMachineConfig;
}
