import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TraceSpan } from "./tracespan";


// Trace
/** 
 * A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
**/
export class Trace extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=spans", elemType: shared.TraceSpan })
  spans?: TraceSpan[];

  @Metadata({ data: "json, name=traceId" })
  traceId?: string;
}
