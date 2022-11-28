import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trace } from "./trace";



// Traces
/** 
 * List of new or updated traces.
**/
export class Traces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=traces", elemType: Trace })
  traces?: Trace[];
}
