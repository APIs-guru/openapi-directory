import { SpeakeasyBase } from "../../../internal/utils";
import { Advertiser } from "./advertiser";
export declare class ListAdvertisersResponse extends SpeakeasyBase {
    advertisers?: Advertiser[];
    nextPageToken?: string;
}
