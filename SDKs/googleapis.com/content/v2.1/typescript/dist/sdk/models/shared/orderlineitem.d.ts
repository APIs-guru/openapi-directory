import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemAdjustment } from "./orderlineitemadjustment";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
import { OrderCancellation } from "./ordercancellation";
import { Price } from "./price";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderReturn } from "./orderreturn";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
export declare class OrderLineItem extends SpeakeasyBase {
    adjustments?: OrderLineItemAdjustment[];
    annotations?: OrderMerchantProvidedAnnotation[];
    cancellations?: OrderCancellation[];
    id?: string;
    price?: Price;
    product?: OrderLineItemProduct;
    quantityCanceled?: number;
    quantityDelivered?: number;
    quantityOrdered?: number;
    quantityPending?: number;
    quantityReadyForPickup?: number;
    quantityReturned?: number;
    quantityShipped?: number;
    quantityUndeliverable?: number;
    returnInfo?: OrderLineItemReturnInfo;
    returns?: OrderReturn[];
    shippingDetails?: OrderLineItemShippingDetails;
    tax?: Price;
}
