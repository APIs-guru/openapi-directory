import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Span } from "./span";



// BatchWriteSpansRequest
/** 
 * The request message for the `BatchWriteSpans` method.
**/
export class BatchWriteSpansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spans", elemType: Span })
  spans?: Span[];
}
