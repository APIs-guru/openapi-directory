import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { MerchantRejectionReason } from "./merchantrejectionreason";
import { RefundReason } from "./refundreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { MonetaryAmount } from "./monetaryamount";



export class MerchantOrderReturnItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerReturnReason" })
  customerReturnReason?: CustomerReturnReason;

  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantRejectionReason" })
  merchantRejectionReason?: MerchantRejectionReason;

  @SpeakeasyMetadata({ data: "json, name=merchantReturnReason" })
  merchantReturnReason?: RefundReason;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: OrderLineItemProduct;

  @SpeakeasyMetadata({ data: "json, name=refundableAmount" })
  refundableAmount?: MonetaryAmount;

  @SpeakeasyMetadata({ data: "json, name=returnItemId" })
  returnItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnShipmentIds" })
  returnShipmentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentUnitId" })
  shipmentUnitId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
