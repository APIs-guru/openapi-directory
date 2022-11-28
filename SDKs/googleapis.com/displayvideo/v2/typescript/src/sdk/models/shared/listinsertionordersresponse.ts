import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsertionOrder } from "./insertionorder";



export class ListInsertionOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertionOrders", elemType: InsertionOrder })
  insertionOrders?: InsertionOrder[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
