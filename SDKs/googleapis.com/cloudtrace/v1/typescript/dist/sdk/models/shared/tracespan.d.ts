import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TraceSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED",
    RpcServer = "RPC_SERVER",
    RpcClient = "RPC_CLIENT"
}
/**
 * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
**/
export declare class TraceSpan extends SpeakeasyBase {
    endTime?: string;
    kind?: TraceSpanKindEnum;
    labels?: Map<string, string>;
    name?: string;
    parentSpanId?: string;
    spanId?: string;
    startTime?: string;
}
