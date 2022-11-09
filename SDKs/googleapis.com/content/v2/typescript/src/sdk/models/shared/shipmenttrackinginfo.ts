import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShipmentTrackingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=trackingNumber" })
  trackingNumber?: string;
}
