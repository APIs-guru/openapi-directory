import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrderShipmentScheduledDeliveryDetails } from "./ordershipmentscheduleddeliverydetails";



export class OrderShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderShipmentLineItemShipment })
  lineItems?: OrderShipmentLineItemShipment[];

  @SpeakeasyMetadata({ data: "json, name=scheduledDeliveryDetails" })
  scheduledDeliveryDetails?: OrderShipmentScheduledDeliveryDetails;

  @SpeakeasyMetadata({ data: "json, name=shipmentGroupId" })
  shipmentGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
