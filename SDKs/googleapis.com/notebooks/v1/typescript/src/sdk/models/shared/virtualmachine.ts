import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualMachineConfig } from "./virtualmachineconfig";


// VirtualMachine
/** 
 * Runtime using Virtual Machine for computing.
**/
export class VirtualMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=instanceName" })
  instanceName?: string;

  @Metadata({ data: "json, name=virtualMachineConfig" })
  virtualMachineConfig?: VirtualMachineConfig;
}
