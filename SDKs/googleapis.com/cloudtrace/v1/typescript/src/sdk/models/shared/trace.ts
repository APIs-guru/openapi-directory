import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TraceSpan } from "./tracespan";



// Trace
/** 
 * A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
**/
export class Trace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=spans", elemType: TraceSpan })
  spans?: TraceSpan[];

  @SpeakeasyMetadata({ data: "json, name=traceId" })
  traceId?: string;
}
