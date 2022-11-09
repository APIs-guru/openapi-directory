import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderShipmentLineItemShipment extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
