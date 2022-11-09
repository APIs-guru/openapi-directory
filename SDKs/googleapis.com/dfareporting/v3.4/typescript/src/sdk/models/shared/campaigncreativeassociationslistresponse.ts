import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CampaignCreativeAssociation } from "./campaigncreativeassociation";


// CampaignCreativeAssociationsListResponse
/** 
 * Campaign Creative Association List Response
**/
export class CampaignCreativeAssociationsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignCreativeAssociations", elemType: shared.CampaignCreativeAssociation })
  campaignCreativeAssociations?: CampaignCreativeAssociation[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
