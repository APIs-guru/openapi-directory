import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShipmentTrackingInfo } from "./shipmenttrackinginfo";


export class ReturnShipment extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=deliveryDate" })
  deliveryDate?: string;

  @Metadata({ data: "json, name=returnMethodType" })
  returnMethodType?: string;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @Metadata({ data: "json, name=shipmentTrackingInfos", elemType: shared.ShipmentTrackingInfo })
  shipmentTrackingInfos?: ShipmentTrackingInfo[];

  @Metadata({ data: "json, name=shippingDate" })
  shippingDate?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
