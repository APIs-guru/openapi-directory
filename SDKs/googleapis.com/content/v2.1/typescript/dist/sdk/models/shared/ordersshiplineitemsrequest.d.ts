import { SpeakeasyBase } from "../../../internal/utils";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo } from "./orderscustombatchrequestentryshiplineitemsshipmentinfo";
export declare class OrdersShipLineItemsRequest extends SpeakeasyBase {
    lineItems?: OrderShipmentLineItemShipment[];
    operationId?: string;
    shipmentGroupId?: string;
    shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
}
