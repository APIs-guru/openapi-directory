import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsertionOrder } from "./insertionorder";


export class ListInsertionOrdersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertionOrders", elemType: shared.InsertionOrder })
  insertionOrders?: InsertionOrder[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
