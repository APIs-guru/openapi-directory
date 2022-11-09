import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Any information to send back to Workflows when completing an action callback as part of a batch request.
**/
export declare class CallbackCompletionBatchRequest extends SpeakeasyBase {
    callbackId: string;
    outputFields: Map<string, string>;
}
