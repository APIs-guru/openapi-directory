import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { TruncatableString } from "./truncatablestring";
import { Links } from "./links";
import { StackTrace } from "./stacktrace";
import { Status } from "./status";
import { TimeEvents } from "./timeevents";
export declare enum SpanSpanKindEnum {
    SpanKindUnspecified = "SPAN_KIND_UNSPECIFIED",
    Internal = "INTERNAL",
    Server = "SERVER",
    Client = "CLIENT",
    Producer = "PRODUCER",
    Consumer = "CONSUMER"
}
/**
 * A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there might be gaps or overlaps between spans in a trace.
**/
export declare class Span extends SpeakeasyBase {
    attributes?: Attributes;
    childSpanCount?: number;
    displayName?: TruncatableString;
    endTime?: string;
    links?: Links;
    name?: string;
    parentSpanId?: string;
    sameProcessAsParentSpan?: boolean;
    spanId?: string;
    spanKind?: SpanSpanKindEnum;
    stackTrace?: StackTrace;
    startTime?: string;
    status?: Status;
    timeEvents?: TimeEvents;
}
