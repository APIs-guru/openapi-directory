import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShipmentTrackingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingNumber" })
  trackingNumber?: string;
}
