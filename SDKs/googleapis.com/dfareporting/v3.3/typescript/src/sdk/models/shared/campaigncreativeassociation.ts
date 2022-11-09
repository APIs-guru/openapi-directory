import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignCreativeAssociation
/** 
 * Identifies a creative which has been associated with a given campaign.
**/
export class CampaignCreativeAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
