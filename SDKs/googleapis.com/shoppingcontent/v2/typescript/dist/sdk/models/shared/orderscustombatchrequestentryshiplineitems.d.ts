import { SpeakeasyBase } from "../../../internal/utils";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo } from "./orderscustombatchrequestentryshiplineitemsshipmentinfo";
export declare class OrdersCustomBatchRequestEntryShipLineItems extends SpeakeasyBase {
    carrier?: string;
    lineItems?: OrderShipmentLineItemShipment[];
    shipmentGroupId?: string;
    shipmentId?: string;
    shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
    trackingId?: string;
}
