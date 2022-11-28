import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderHistoryEditFields } from "./orderhistoryeditfields";



export class OrderHistoryEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order_history" })
  orderHistory?: OrderHistoryEditFields;
}
