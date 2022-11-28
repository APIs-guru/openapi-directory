import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteInput } from "./site";



// BulkEditSitesRequestInput
/** 
 * Request message for SiteService.BulkEditSites.
**/
export class BulkEditSitesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdSites", elemType: SiteInput })
  createdSites?: SiteInput[];

  @SpeakeasyMetadata({ data: "json, name=deletedSites" })
  deletedSites?: string[];

  @SpeakeasyMetadata({ data: "json, name=partnerId" })
  partnerId?: string;
}
