import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BiddingFunction } from "./biddingfunction";
/**
 * A response containing a list of a bidder's bidding functions.
**/
export declare class ListBiddingFunctionsResponse extends SpeakeasyBase {
    biddingFunctions?: BiddingFunction[];
    nextPageToken?: string;
}
