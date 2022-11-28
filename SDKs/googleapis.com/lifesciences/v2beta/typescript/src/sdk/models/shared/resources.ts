import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachine } from "./virtualmachine";



// Resources
/** 
 * The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
**/
export class Resources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];

  @SpeakeasyMetadata({ data: "json, name=virtualMachine" })
  virtualMachine?: VirtualMachine;

  @SpeakeasyMetadata({ data: "json, name=zones" })
  zones?: string[];
}
