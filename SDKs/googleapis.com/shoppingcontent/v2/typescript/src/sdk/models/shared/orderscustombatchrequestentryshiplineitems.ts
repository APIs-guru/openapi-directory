import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo } from "./orderscustombatchrequestentryshiplineitemsshipmentinfo";



export class OrdersCustomBatchRequestEntryShipLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderShipmentLineItemShipment })
  lineItems?: OrderShipmentLineItemShipment[];

  @SpeakeasyMetadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentInfos", elemType: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo })
  shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
