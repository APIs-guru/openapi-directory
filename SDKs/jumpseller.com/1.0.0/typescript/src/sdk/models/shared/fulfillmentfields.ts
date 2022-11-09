import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FulfillmentFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=external_id" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=service_type" })
  serviceType?: string;

  @Metadata({ data: "json, name=shipment_status" })
  shipmentStatus?: string;

  @Metadata({ data: "json, name=tracking_company" })
  trackingCompany?: string;

  @Metadata({ data: "json, name=tracking_number" })
  trackingNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
