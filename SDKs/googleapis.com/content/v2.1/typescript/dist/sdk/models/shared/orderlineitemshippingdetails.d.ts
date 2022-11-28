import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemShippingDetailsMethod } from "./orderlineitemshippingdetailsmethod";
export declare class OrderLineItemShippingDetails extends SpeakeasyBase {
    deliverByDate?: string;
    method?: OrderLineItemShippingDetailsMethod;
    pickupPromiseInMinutes?: number;
    shipByDate?: string;
    type?: string;
}
