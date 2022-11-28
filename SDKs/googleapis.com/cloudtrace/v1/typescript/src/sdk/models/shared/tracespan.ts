import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TraceSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED",
    RpcServer = "RPC_SERVER",
    RpcClient = "RPC_CLIENT"
}


// TraceSpan
/** 
 * A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace.
**/
export class TraceSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: TraceSpanKindEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentSpanId" })
  parentSpanId?: string;

  @SpeakeasyMetadata({ data: "json, name=spanId" })
  spanId?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
