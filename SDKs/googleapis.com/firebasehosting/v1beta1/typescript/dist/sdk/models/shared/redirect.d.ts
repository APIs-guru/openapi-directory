import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
**/
export declare class Redirect extends SpeakeasyBase {
    glob?: string;
    location?: string;
    regex?: string;
    statusCode?: number;
}
