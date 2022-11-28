import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderTrackingSignalShipmentLineItemMapping
/** 
 * Represents how many items are in the shipment for the given shipment_id and line_item_id.
**/
export class OrderTrackingSignalShipmentLineItemMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;
}
