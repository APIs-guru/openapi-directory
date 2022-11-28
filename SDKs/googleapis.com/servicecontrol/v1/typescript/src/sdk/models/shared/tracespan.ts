import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";
import { Status } from "./status";


export enum TraceSpanSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED",
    Internal = "INTERNAL",
    Server = "SERVER",
    Client = "CLIENT",
    Producer = "PRODUCER",
    Consumer = "CONSUMER"
}


// TraceSpan
/** 
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace.
**/
export class TraceSpan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @SpeakeasyMetadata({ data: "json, name=childSpanCount" })
  childSpanCount?: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: TruncatableString;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentSpanId" })
  parentSpanId?: string;

  @SpeakeasyMetadata({ data: "json, name=sameProcessAsParentSpan" })
  sameProcessAsParentSpan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spanId" })
  spanId?: string;

  @SpeakeasyMetadata({ data: "json, name=spanKind" })
  spanKind?: TraceSpanSpanKindEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
