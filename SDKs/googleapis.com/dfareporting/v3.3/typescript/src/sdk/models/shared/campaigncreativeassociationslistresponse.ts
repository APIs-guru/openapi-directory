import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignCreativeAssociation } from "./campaigncreativeassociation";



// CampaignCreativeAssociationsListResponse
/** 
 * Campaign Creative Association List Response
**/
export class CampaignCreativeAssociationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignCreativeAssociations", elemType: CampaignCreativeAssociation })
  campaignCreativeAssociations?: CampaignCreativeAssociation[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
