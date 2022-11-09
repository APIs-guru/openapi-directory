import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersUpdateLineItemShippingDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliverByDate" })
  deliverByDate?: string;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=shipByDate" })
  shipByDate?: string;
}
