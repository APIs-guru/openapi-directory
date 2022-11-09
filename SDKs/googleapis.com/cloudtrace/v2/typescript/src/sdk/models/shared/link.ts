import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Attributes } from "./attributes";

export enum LinkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    ChildLinkedSpan = "CHILD_LINKED_SPAN"
,    ParentLinkedSpan = "PARENT_LINKED_SPAN"
}


// Link
/** 
 * A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @Metadata({ data: "json, name=spanId" })
  spanId?: string;

  @Metadata({ data: "json, name=traceId" })
  traceId?: string;

  @Metadata({ data: "json, name=type" })
  type?: LinkTypeEnum;
}
