import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bidder } from "./bidder";


// ListBiddersResponse
/** 
 * A response containing bidders.
**/
export class ListBiddersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidders", elemType: shared.Bidder })
  bidders?: Bidder[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
