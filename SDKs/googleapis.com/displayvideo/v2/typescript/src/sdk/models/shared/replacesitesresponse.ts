import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Site } from "./site";


// ReplaceSitesResponse
/** 
 * Response message for SiteService.ReplaceSites.
**/
export class ReplaceSitesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=sites", elemType: shared.Site })
  sites?: Site[];
}
