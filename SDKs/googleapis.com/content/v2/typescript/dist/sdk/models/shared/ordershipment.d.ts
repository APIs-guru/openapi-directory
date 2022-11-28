import { SpeakeasyBase } from "../../../internal/utils";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrderShipmentScheduledDeliveryDetails } from "./ordershipmentscheduleddeliverydetails";
export declare class OrderShipment extends SpeakeasyBase {
    carrier?: string;
    creationDate?: string;
    deliveryDate?: string;
    id?: string;
    lineItems?: OrderShipmentLineItemShipment[];
    scheduledDeliveryDetails?: OrderShipmentScheduledDeliveryDetails;
    status?: string;
    trackingId?: string;
}
