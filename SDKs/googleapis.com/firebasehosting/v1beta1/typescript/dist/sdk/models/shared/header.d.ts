import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
**/
export declare class Header extends SpeakeasyBase {
    glob?: string;
    headers?: Map<string, string>;
    regex?: string;
}
