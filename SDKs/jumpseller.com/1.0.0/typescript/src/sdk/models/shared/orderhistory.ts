import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderHistoryFields } from "./orderhistoryfields";


export class OrderHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=order_history" })
  orderHistory?: OrderHistoryFields;
}
