import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MachineConfig
/** 
 * MachineConfig describes the configuration of a machine.
**/
export class MachineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;
}
