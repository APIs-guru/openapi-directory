import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualMachineConfig } from "./virtualmachineconfig";
/**
 * Runtime using Virtual Machine for computing.
**/
export declare class VirtualMachine extends SpeakeasyBase {
    instanceId?: string;
    instanceName?: string;
    virtualMachineConfig?: VirtualMachineConfig;
}
