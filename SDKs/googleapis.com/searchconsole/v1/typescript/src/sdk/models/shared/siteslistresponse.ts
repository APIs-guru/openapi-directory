import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WmxSite } from "./wmxsite";


// SitesListResponse
/** 
 * List of sites with access level information.
**/
export class SitesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=siteEntry", elemType: shared.WmxSite })
  siteEntry?: WmxSite[];
}
