import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersCreateTestOrderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;
}
