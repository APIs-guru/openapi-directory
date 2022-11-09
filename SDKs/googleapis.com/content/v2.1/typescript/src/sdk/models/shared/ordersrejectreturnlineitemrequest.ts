import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersRejectReturnLineItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
