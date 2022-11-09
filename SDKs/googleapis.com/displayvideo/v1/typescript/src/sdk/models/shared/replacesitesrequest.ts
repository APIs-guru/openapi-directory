import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Site } from "./site";


// ReplaceSitesRequest
/** 
 * Request message for SiteService.ReplaceSites.
**/
export class ReplaceSitesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=newSites", elemType: shared.Site })
  newSites?: Site[];

  @Metadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
