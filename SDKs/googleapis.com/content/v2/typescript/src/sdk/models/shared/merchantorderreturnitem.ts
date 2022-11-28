import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { RefundReason } from "./refundreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";



export class MerchantOrderReturnItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerReturnReason" })
  customerReturnReason?: CustomerReturnReason;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantReturnReason" })
  merchantReturnReason?: RefundReason;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: OrderLineItemProduct;

  @SpeakeasyMetadata({ data: "json, name=returnShipmentIds" })
  returnShipmentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
