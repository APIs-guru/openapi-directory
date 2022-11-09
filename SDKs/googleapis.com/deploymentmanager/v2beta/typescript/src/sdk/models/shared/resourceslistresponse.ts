import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Resource } from "./resource";


// ResourcesListResponse
/** 
 * A response containing a partial list of resources and a page token used to build the next request if the request has been truncated.
**/
export class ResourcesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Resource })
  resources?: Resource[];
}
