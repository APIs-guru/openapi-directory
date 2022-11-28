import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payload containing device states information.
**/
export declare class QueryResponsePayload extends SpeakeasyBase {
    devices?: Map<string, Map<string, any>>;
}
