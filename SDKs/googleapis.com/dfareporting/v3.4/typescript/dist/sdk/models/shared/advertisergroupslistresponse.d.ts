import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserGroup } from "./advertisergroup";
/**
 * Advertiser Group List Response
**/
export declare class AdvertiserGroupsListResponse extends SpeakeasyBase {
    advertiserGroups?: AdvertiserGroup[];
    kind?: string;
    nextPageToken?: string;
}
