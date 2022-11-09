import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItem } from "./lineitem";


export class ListLineItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItems", elemType: shared.LineItem })
  lineItems?: LineItem[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
