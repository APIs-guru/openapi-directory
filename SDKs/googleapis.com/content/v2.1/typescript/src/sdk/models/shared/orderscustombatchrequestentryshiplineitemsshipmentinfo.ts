import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
