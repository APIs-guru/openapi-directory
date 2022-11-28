import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteInput } from "./site";



// ReplaceSitesRequestInput
/** 
 * Request message for SiteService.ReplaceSites.
**/
export class ReplaceSitesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=newSites", elemType: SiteInput })
  newSites?: SiteInput[];

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
