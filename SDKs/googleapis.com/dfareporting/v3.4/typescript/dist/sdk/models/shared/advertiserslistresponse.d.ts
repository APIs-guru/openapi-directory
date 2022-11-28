import { SpeakeasyBase } from "../../../internal/utils";
import { Advertiser } from "./advertiser";
/**
 * Advertiser List Response
**/
export declare class AdvertisersListResponse extends SpeakeasyBase {
    advertisers?: Advertiser[];
    kind?: string;
    nextPageToken?: string;
}
