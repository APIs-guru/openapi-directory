import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
**/
export declare class Response extends SpeakeasyBase {
    backendLatency?: string;
    code?: string;
    headers?: Map<string, string>;
    size?: string;
    time?: string;
}
