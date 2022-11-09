import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Buyer } from "./buyer";


// ListBuyersResponse
/** 
 * A response containing buyer account information.
**/
export class ListBuyersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyers", elemType: shared.Buyer })
  buyers?: Buyer[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
