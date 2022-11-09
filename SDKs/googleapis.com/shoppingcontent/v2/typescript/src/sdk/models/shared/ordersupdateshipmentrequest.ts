import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersUpdateShipmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
