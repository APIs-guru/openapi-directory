import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Resource } from "./resource";
/**
 * A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
**/
export declare class ResourcesListResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Resource[];
}
