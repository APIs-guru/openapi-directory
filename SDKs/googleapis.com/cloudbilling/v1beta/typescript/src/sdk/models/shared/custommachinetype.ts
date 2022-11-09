import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomMachineType
/** 
 * Specification of a custom machine type.
**/
export class CustomMachineType extends SpeakeasyBase {
  @Metadata({ data: "json, name=machineSeries" })
  machineSeries?: string;

  @Metadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @Metadata({ data: "json, name=virtualCpuCount" })
  virtualCpuCount?: string;
}
