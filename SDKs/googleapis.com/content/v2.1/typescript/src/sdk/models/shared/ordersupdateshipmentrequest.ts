import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails } from "./orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails";



export class OrdersUpdateShipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=lastPickupDate" })
  lastPickupDate?: string;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=readyPickupDate" })
  readyPickupDate?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledDeliveryDetails" })
  scheduledDeliveryDetails?: OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;

  @SpeakeasyMetadata({ data: "json, name=undeliveredDate" })
  undeliveredDate?: string;
}
