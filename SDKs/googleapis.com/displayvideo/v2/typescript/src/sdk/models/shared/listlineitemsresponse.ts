import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItem } from "./lineitem";



export class ListLineItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: LineItem })
  lineItems?: LineItem[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
