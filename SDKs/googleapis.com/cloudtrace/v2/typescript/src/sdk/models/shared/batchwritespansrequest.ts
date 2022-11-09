import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Span } from "./span";


// BatchWriteSpansRequest
/** 
 * The request message for the `BatchWriteSpans` method.
**/
export class BatchWriteSpansRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=spans", elemType: shared.Span })
  spans?: Span[];
}
