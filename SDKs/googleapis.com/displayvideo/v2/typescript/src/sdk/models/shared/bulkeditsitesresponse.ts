import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Site } from "./site";


// BulkEditSitesResponse
/** 
 * Response message for SiteService.BulkEditSites.
**/
export class BulkEditSitesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=sites", elemType: shared.Site })
  sites?: Site[];
}
