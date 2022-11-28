import { SpeakeasyBase } from "../../../internal/utils";
import { Manifest } from "./manifest";
/**
 * A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
**/
export declare class ManifestsListResponse extends SpeakeasyBase {
    manifests?: Manifest[];
    nextPageToken?: string;
}
