import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderTrackingSignalShipmentLineItemMapping
/** 
 * Represents how many items are in the shipment for the given shipment_id and line_item_id.
**/
export class OrderTrackingSignalShipmentLineItemMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;
}
