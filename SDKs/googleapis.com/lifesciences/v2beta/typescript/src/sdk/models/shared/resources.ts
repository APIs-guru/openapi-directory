import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VirtualMachine } from "./virtualmachine";


// Resources
/** 
 * The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
**/
export class Resources extends SpeakeasyBase {
  @Metadata({ data: "json, name=regions" })
  regions?: string[];

  @Metadata({ data: "json, name=virtualMachine" })
  virtualMachine?: VirtualMachine;

  @Metadata({ data: "json, name=zones" })
  zones?: string[];
}
