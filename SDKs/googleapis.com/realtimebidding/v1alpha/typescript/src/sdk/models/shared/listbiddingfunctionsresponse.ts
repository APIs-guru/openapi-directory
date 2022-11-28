import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BiddingFunction } from "./biddingfunction";



// ListBiddingFunctionsResponse
/** 
 * A response containing a list of a bidder's bidding functions.
**/
export class ListBiddingFunctionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biddingFunctions", elemType: BiddingFunction })
  biddingFunctions?: BiddingFunction[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
