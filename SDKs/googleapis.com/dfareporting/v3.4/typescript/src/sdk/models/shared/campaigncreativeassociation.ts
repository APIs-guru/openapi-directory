import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignCreativeAssociation
/** 
 * Identifies a creative which has been associated with a given campaign.
**/
export class CampaignCreativeAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
