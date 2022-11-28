import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FulfillmentFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=order_id" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=shipment_status" })
  shipmentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_company" })
  trackingCompany?: string;

  @SpeakeasyMetadata({ data: "json, name=tracking_number" })
  trackingNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
