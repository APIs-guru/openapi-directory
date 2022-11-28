import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseAddress } from "./responseaddress";


export enum ActivityTypeEnum {
    Start = "start",
    End = "end",
    Service = "service",
    PickupShipment = "pickupShipment",
    DeliverShipment = "deliverShipment",
    Pickup = "pickup",
    Delivery = "delivery",
    Break = "break"
}


export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: ResponseAddress;

  @SpeakeasyMetadata({ data: "json, name=arr_date_time" })
  arrDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=arr_time" })
  arrTime?: number;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=driving_time" })
  drivingTime?: number;

  @SpeakeasyMetadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=load_after" })
  loadAfter?: number[];

  @SpeakeasyMetadata({ data: "json, name=load_before" })
  loadBefore?: number[];

  @SpeakeasyMetadata({ data: "json, name=location_id" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ActivityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}
