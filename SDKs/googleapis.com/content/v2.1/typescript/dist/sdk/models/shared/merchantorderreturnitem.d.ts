import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerReturnReason } from "./customerreturnreason";
import { MerchantRejectionReason } from "./merchantrejectionreason";
import { RefundReason } from "./refundreason";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { MonetaryAmount } from "./monetaryamount";
export declare class MerchantOrderReturnItem extends SpeakeasyBase {
    customerReturnReason?: CustomerReturnReason;
    itemId?: string;
    merchantRejectionReason?: MerchantRejectionReason;
    merchantReturnReason?: RefundReason;
    product?: OrderLineItemProduct;
    refundableAmount?: MonetaryAmount;
    returnItemId?: string;
    returnShipmentIds?: string[];
    shipmentGroupId?: string;
    shipmentUnitId?: string;
    state?: string;
}
