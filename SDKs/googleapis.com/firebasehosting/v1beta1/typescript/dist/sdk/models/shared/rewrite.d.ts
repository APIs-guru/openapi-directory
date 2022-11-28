import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunRewrite } from "./cloudrunrewrite";
/**
 * A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
**/
export declare class Rewrite extends SpeakeasyBase {
    dynamicLinks?: boolean;
    function?: string;
    functionRegion?: string;
    glob?: string;
    path?: string;
    regex?: string;
    run?: CloudRunRewrite;
}
