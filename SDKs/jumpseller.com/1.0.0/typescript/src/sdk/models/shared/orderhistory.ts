import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderHistoryFields } from "./orderhistoryfields";



export class OrderHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order_history" })
  orderHistory?: OrderHistoryFields;
}
