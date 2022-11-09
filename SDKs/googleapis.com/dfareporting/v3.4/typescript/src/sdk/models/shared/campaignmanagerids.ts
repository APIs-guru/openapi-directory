import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignManagerIds
/** 
 * Campaign Manager IDs related to the custom event.
**/
export class CampaignManagerIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=placementId" })
  placementId?: string;

  @Metadata({ data: "json, name=siteId" })
  siteId?: string;
}
