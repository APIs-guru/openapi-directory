import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";


export enum LinkTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ChildLinkedSpan = "CHILD_LINKED_SPAN",
    ParentLinkedSpan = "PARENT_LINKED_SPAN"
}


// Link
/** 
 * A pointer from the current span to another span in the same trace or in a different trace. For example, this can be used in batching operations, where a single batch handler processes multiple requests from different traces or when the handler receives a request from a different project.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @SpeakeasyMetadata({ data: "json, name=spanId" })
  spanId?: string;

  @SpeakeasyMetadata({ data: "json, name=traceId" })
  traceId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LinkTypeEnum;
}
