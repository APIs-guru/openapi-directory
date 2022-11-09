import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo } from "./orderscustombatchrequestentryshiplineitemsshipmentinfo";


export class OrdersShipLineItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderShipmentLineItemShipment })
  lineItems?: OrderShipmentLineItemShipment[];

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;

  @Metadata({ data: "json, name=shipmentInfos", elemType: shared.OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo })
  shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
}
