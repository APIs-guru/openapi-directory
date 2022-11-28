import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCreateTestOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;
}
