import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersUpdateMerchantOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;
}
