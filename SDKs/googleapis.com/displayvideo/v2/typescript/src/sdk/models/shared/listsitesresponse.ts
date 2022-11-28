import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";



// ListSitesResponse
/** 
 * Response message for SiteService.ListSites.
**/
export class ListSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sites", elemType: Site })
  sites?: Site[];
}
