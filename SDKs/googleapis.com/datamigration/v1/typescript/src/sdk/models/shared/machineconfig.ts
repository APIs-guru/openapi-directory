import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MachineConfig
/** 
 * MachineConfig describes the configuration of a machine.
**/
export class MachineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;
}
