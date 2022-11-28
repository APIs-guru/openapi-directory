import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
