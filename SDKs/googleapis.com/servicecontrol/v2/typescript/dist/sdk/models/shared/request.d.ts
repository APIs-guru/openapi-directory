import { SpeakeasyBase } from "../../../internal/utils";
import { Auth } from "./auth";
/**
 * This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.
**/
export declare class Request extends SpeakeasyBase {
    auth?: Auth;
    headers?: Map<string, string>;
    host?: string;
    id?: string;
    method?: string;
    path?: string;
    protocol?: string;
    query?: string;
    reason?: string;
    scheme?: string;
    size?: string;
    time?: string;
}
