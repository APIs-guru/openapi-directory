import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { RefundReason } from "./refundreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";


export class MerchantOrderReturnItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerReturnReason" })
  customerReturnReason?: CustomerReturnReason;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=merchantReturnReason" })
  merchantReturnReason?: RefundReason;

  @Metadata({ data: "json, name=product" })
  product?: OrderLineItemProduct;

  @Metadata({ data: "json, name=returnShipmentIds" })
  returnShipmentIds?: string[];

  @Metadata({ data: "json, name=state" })
  state?: string;
}
