import { SpeakeasyBase } from "../../../internal/utils";
import { TraceSpan } from "./tracespan";
/**
 * A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation.
**/
export declare class Trace extends SpeakeasyBase {
    projectId?: string;
    spans?: TraceSpan[];
    traceId?: string;
}
