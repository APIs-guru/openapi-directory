import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// ResourcesListResponse
/** 
 * A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
**/
export class ResourcesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Resource })
  resources?: Resource[];
}
