import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TraceSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED"
,    RpcServer = "RPC_SERVER"
,    RpcClient = "RPC_CLIENT"
}


// TraceSpan
/** 
 * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
**/
export class TraceSpan extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: TraceSpanKindEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentSpanId" })
  parentSpanId?: string;

  @Metadata({ data: "json, name=spanId" })
  spanId?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
