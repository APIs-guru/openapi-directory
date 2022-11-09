import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails } from "./orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails";


export class OrdersUpdateShipmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @Metadata({ data: "json, name=lastPickupDate" })
  lastPickupDate?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=readyPickupDate" })
  readyPickupDate?: string;

  @Metadata({ data: "json, name=scheduledDeliveryDetails" })
  scheduledDeliveryDetails?: OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;

  @Metadata({ data: "json, name=undeliveredDate" })
  undeliveredDate?: string;
}
