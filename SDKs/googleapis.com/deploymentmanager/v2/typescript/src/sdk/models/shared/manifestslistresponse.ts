import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Manifest } from "./manifest";


// ManifestsListResponse
/** 
 * A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
**/
export class ManifestsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=manifests", elemType: shared.Manifest })
  manifests?: Manifest[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
