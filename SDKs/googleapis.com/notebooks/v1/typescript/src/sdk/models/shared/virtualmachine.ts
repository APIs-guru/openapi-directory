import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachineConfigInput } from "./virtualmachineconfig";
import { VirtualMachineConfig } from "./virtualmachineconfig";



// VirtualMachineInput
/** 
 * Runtime using Virtual Machine for computing.
**/
export class VirtualMachineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=virtualMachineConfig" })
  virtualMachineConfig?: VirtualMachineConfigInput;
}


// VirtualMachine
/** 
 * Runtime using Virtual Machine for computing.
**/
export class VirtualMachine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualMachineConfig" })
  virtualMachineConfig?: VirtualMachineConfig;
}
