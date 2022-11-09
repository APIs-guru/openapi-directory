import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
import { OrderShipmentScheduledDeliveryDetails } from "./ordershipmentscheduleddeliverydetails";


export class OrderShipment extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderShipmentLineItemShipment })
  lineItems?: OrderShipmentLineItemShipment[];

  @Metadata({ data: "json, name=scheduledDeliveryDetails" })
  scheduledDeliveryDetails?: OrderShipmentScheduledDeliveryDetails;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
