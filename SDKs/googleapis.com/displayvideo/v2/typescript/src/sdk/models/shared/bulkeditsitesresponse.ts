import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";



// BulkEditSitesResponse
/** 
 * Response message for SiteService.BulkEditSites.
**/
export class BulkEditSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sites", elemType: Site })
  sites?: Site[];
}
