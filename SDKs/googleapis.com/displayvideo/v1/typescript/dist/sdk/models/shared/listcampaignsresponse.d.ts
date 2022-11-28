import { SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";
export declare class ListCampaignsResponse extends SpeakeasyBase {
    campaigns?: Campaign[];
    nextPageToken?: string;
}
