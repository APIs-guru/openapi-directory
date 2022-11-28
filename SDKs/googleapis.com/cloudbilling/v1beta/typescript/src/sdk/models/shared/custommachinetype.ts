import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomMachineType
/** 
 * Specification of a custom machine type.
**/
export class CustomMachineType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=machineSeries" })
  machineSeries?: string;

  @SpeakeasyMetadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=virtualCpuCount" })
  virtualCpuCount?: string;
}
