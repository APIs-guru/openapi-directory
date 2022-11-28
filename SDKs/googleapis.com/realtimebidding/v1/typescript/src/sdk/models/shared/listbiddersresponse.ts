import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bidder } from "./bidder";



// ListBiddersResponse
/** 
 * A response containing bidders.
**/
export class ListBiddersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidders", elemType: Bidder })
  bidders?: Bidder[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
