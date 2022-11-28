import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionResult } from "./completionresult";
import { ResponseMetadata } from "./responsemetadata";
/**
 * Response of auto-complete query.
**/
export declare class CompleteQueryResponse extends SpeakeasyBase {
    completionResults?: CompletionResult[];
    metadata?: ResponseMetadata;
}
