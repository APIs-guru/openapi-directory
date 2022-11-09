import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderHistoryEditFields } from "./orderhistoryeditfields";


export class OrderHistoryEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=order_history" })
  orderHistory?: OrderHistoryEditFields;
}
