import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeader } from "./httpheader";
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
export declare class HttpGetAction extends SpeakeasyBase {
    host?: string;
    httpHeaders?: HttpHeader[];
    path?: string;
    scheme?: string;
}
