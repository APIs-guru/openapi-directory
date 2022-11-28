import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignCreativeAssociation } from "./campaigncreativeassociation";
/**
 * Campaign Creative Association List Response
**/
export declare class CampaignCreativeAssociationsListResponse extends SpeakeasyBase {
    campaignCreativeAssociations?: CampaignCreativeAssociation[];
    kind?: string;
    nextPageToken?: string;
}
