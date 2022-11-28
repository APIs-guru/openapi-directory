import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WmxSite } from "./wmxsite";



// SitesListResponse
/** 
 * List of sites with access level information.
**/
export class SitesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=siteEntry", elemType: WmxSite })
  siteEntry?: WmxSite[];
}
