import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";
import { Links } from "./links";
import { StackTrace } from "./stacktrace";
import { Status } from "./status";
import { TimeEvents } from "./timeevents";

export enum SpanSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED"
,    Internal = "INTERNAL"
,    Server = "SERVER"
,    Client = "CLIENT"
,    Producer = "PRODUCER"
,    Consumer = "CONSUMER"
}


// Span
/** 
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there might be gaps or overlaps between spans in a trace.
**/
export class Span extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @Metadata({ data: "json, name=childSpanCount" })
  childSpanCount?: number;

  @Metadata({ data: "json, name=displayName" })
  displayName?: TruncatableString;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=links" })
  links?: Links;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentSpanId" })
  parentSpanId?: string;

  @Metadata({ data: "json, name=sameProcessAsParentSpan" })
  sameProcessAsParentSpan?: boolean;

  @Metadata({ data: "json, name=spanId" })
  spanId?: string;

  @Metadata({ data: "json, name=spanKind" })
  spanKind?: SpanSpanKindEnum;

  @Metadata({ data: "json, name=stackTrace" })
  stackTrace?: StackTrace;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: Status;

  @Metadata({ data: "json, name=timeEvents" })
  timeEvents?: TimeEvents;
}
