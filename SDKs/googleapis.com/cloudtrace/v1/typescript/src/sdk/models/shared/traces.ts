import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Trace } from "./trace";


// Traces
/** 
 * List of new or updated traces.
**/
export class Traces extends SpeakeasyBase {
  @Metadata({ data: "json, name=traces", elemType: shared.Trace })
  traces?: Trace[];
}
