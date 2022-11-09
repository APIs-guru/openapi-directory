import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Order } from "./order";


// OrdersListResponse
/** 
 * Order List Response
**/
export class OrdersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=orders", elemType: shared.Order })
  orders?: Order[];
}
