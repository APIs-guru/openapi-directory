import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShipmentTrackingInfo } from "./shipmenttrackinginfo";



export class ReturnShipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=returnMethodType" })
  returnMethodType?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentTrackingInfos", elemType: ShipmentTrackingInfo })
  shipmentTrackingInfos?: ShipmentTrackingInfo[];

  @SpeakeasyMetadata({ data: "json, name=shippingDate" })
  shippingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
