import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Order } from "./order";


export class OrdersGetByMerchantOrderIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=order" })
  order?: Order;
}
