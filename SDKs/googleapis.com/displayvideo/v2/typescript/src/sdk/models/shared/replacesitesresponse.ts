import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";



// ReplaceSitesResponse
/** 
 * Response message for SiteService.ReplaceSites.
**/
export class ReplaceSitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sites", elemType: Site })
  sites?: Site[];
}
