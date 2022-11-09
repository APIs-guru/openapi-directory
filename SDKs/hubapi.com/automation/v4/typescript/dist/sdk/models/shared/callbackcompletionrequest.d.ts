import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Any information to send back to Workflows when completing an action callback.
**/
export declare class CallbackCompletionRequest extends SpeakeasyBase {
    outputFields: Map<string, string>;
}
