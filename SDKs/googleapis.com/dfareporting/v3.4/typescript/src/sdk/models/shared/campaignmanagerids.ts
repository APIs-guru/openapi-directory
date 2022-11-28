import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignManagerIds
/** 
 * Campaign Manager IDs related to the custom event.
**/
export class CampaignManagerIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=placementId" })
  placementId?: string;

  @SpeakeasyMetadata({ data: "json, name=siteId" })
  siteId?: string;
}
