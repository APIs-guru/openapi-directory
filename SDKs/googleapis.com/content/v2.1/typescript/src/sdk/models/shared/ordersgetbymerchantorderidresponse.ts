import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";



export class OrdersGetByMerchantOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: Order;
}
