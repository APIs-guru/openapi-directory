import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A context rule provides information about the context for an individual API element.
**/
export declare class ContextRule extends SpeakeasyBase {
    allowedRequestExtensions?: string[];
    allowedResponseExtensions?: string[];
    provided?: string[];
    requested?: string[];
    selector?: string;
}
