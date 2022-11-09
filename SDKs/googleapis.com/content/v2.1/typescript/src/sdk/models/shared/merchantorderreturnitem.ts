import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { MerchantRejectionReason } from "./merchantrejectionreason";
import { RefundReason } from "./refundreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { MonetaryAmount } from "./monetaryamount";


export class MerchantOrderReturnItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerReturnReason" })
  customerReturnReason?: CustomerReturnReason;

  @Metadata({ data: "json, name=itemId" })
  itemId?: string;

  @Metadata({ data: "json, name=merchantRejectionReason" })
  merchantRejectionReason?: MerchantRejectionReason;

  @Metadata({ data: "json, name=merchantReturnReason" })
  merchantReturnReason?: RefundReason;

  @Metadata({ data: "json, name=product" })
  product?: OrderLineItemProduct;

  @Metadata({ data: "json, name=refundableAmount" })
  refundableAmount?: MonetaryAmount;

  @Metadata({ data: "json, name=returnItemId" })
  returnItemId?: string;

  @Metadata({ data: "json, name=returnShipmentIds" })
  returnShipmentIds?: string[];

  @Metadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;

  @Metadata({ data: "json, name=shipmentUnitId" })
  shipmentUnitId?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
