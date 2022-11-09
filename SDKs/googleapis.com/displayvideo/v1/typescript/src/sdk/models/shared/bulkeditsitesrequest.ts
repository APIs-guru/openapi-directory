import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Site } from "./site";


// BulkEditSitesRequest
/** 
 * Request message for SiteService.BulkEditSites.
**/
export class BulkEditSitesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=createdSites", elemType: shared.Site })
  createdSites?: Site[];

  @Metadata({ data: "json, name=deletedSites" })
  deletedSites?: string[];

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
