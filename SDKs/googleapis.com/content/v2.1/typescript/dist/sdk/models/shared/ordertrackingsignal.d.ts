import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
import { OrderTrackingSignalLineItemDetails } from "./ordertrackingsignallineitemdetails";
import { DateTime } from "./datetime";
import { OrderTrackingSignalShipmentLineItemMapping } from "./ordertrackingsignalshipmentlineitemmapping";
import { OrderTrackingSignalShippingInfo } from "./ordertrackingsignalshippinginfo";
/**
 * Represents a merchant trade from which signals are extracted, e.g. shipping.
**/
export declare class OrderTrackingSignal extends SpeakeasyBase {
    customerShippingFee?: PriceAmount;
    deliveryPostalCode?: string;
    deliveryRegionCode?: string;
    lineItems?: OrderTrackingSignalLineItemDetails[];
    merchantId?: string;
    orderCreatedTime?: DateTime;
    orderId?: string;
    orderTrackingSignalId?: string;
    shipmentLineItemMapping?: OrderTrackingSignalShipmentLineItemMapping[];
    shippingInfo?: OrderTrackingSignalShippingInfo[];
}
/**
 * Represents a merchant trade from which signals are extracted, e.g. shipping.
**/
export declare class OrderTrackingSignalInput extends SpeakeasyBase {
    customerShippingFee?: PriceAmount;
    deliveryPostalCode?: string;
    deliveryRegionCode?: string;
    lineItems?: OrderTrackingSignalLineItemDetails[];
    merchantId?: string;
    orderCreatedTime?: DateTime;
    orderId?: string;
    shipmentLineItemMapping?: OrderTrackingSignalShipmentLineItemMapping[];
    shippingInfo?: OrderTrackingSignalShippingInfo[];
}
