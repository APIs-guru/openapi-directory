import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Manifest } from "./manifest";



// ManifestsListResponse
/** 
 * A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
**/
export class ManifestsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manifests", elemType: Manifest })
  manifests?: Manifest[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
