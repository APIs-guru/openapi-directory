import { SpeakeasyBase } from "../../../internal/utils";
import { Span } from "./span";
/**
 * The request message for the `BatchWriteSpans` method.
**/
export declare class BatchWriteSpansRequest extends SpeakeasyBase {
    spans?: Span[];
}
