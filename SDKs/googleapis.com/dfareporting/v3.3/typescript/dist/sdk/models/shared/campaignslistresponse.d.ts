import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
/**
 * Campaign List Response
**/
export declare class CampaignsListResponse extends SpeakeasyBase {
    campaigns?: Campaign[];
    kind?: string;
    nextPageToken?: string;
}
