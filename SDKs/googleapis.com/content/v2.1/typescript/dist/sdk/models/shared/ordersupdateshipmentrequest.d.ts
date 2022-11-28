import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails } from "./orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails";
export declare class OrdersUpdateShipmentRequest extends SpeakeasyBase {
    carrier?: string;
    deliveryDate?: string;
    lastPickupDate?: string;
    operationId?: string;
    readyPickupDate?: string;
    scheduledDeliveryDetails?: OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;
    shipmentId?: string;
    status?: string;
    trackingId?: string;
    undeliveredDate?: string;
}
