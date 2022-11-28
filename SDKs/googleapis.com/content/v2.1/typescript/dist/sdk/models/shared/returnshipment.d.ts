import { SpeakeasyBase } from "../../../internal/utils";
import { ShipmentTrackingInfo } from "./shipmenttrackinginfo";
export declare class ReturnShipment extends SpeakeasyBase {
    creationDate?: string;
    deliveryDate?: string;
    returnMethodType?: string;
    shipmentId?: string;
    shipmentTrackingInfos?: ShipmentTrackingInfo[];
    shippingDate?: string;
    state?: string;
}
