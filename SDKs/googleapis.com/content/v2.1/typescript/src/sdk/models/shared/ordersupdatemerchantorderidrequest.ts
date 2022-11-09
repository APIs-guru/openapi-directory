import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersUpdateMerchantOrderIdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;
}
