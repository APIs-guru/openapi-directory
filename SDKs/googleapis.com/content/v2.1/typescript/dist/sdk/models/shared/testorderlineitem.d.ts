import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderLineItemProduct } from "./testorderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
export declare class TestOrderLineItem extends SpeakeasyBase {
    product?: TestOrderLineItemProduct;
    quantityOrdered?: number;
    returnInfo?: OrderLineItemReturnInfo;
    shippingDetails?: OrderLineItemShippingDetails;
}
