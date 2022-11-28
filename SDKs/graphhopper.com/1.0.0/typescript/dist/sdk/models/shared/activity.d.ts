import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseAddress } from "./responseaddress";
export declare enum ActivityTypeEnum {
    Start = "start",
    End = "end",
    Service = "service",
    PickupShipment = "pickupShipment",
    DeliverShipment = "deliverShipment",
    Pickup = "pickup",
    Delivery = "delivery",
    Break = "break"
}
export declare class Activity extends SpeakeasyBase {
    address?: ResponseAddress;
    arrDateTime?: Date;
    arrTime?: number;
    distance?: number;
    drivingTime?: number;
    endDateTime?: Date;
    endTime?: number;
    id?: string;
    loadAfter?: number[];
    loadBefore?: number[];
    locationId?: string;
    preparationTime?: number;
    type?: ActivityTypeEnum;
    waitingTime?: number;
}
