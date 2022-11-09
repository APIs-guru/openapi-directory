import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BiddingFunction } from "./biddingfunction";


// ListBiddingFunctionsResponse
/** 
 * A response containing a list of a bidder's bidding functions.
**/
export class ListBiddingFunctionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=biddingFunctions", elemType: shared.BiddingFunction })
  biddingFunctions?: BiddingFunction[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
