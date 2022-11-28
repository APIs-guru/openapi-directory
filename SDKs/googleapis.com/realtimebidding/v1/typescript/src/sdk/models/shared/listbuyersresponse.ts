import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";



// ListBuyersResponse
/** 
 * A response containing buyer account information.
**/
export class ListBuyersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyers", elemType: Buyer })
  buyers?: Buyer[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
