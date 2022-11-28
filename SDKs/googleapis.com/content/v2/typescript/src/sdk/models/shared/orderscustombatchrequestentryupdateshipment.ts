import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCustomBatchRequestEntryUpdateShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
