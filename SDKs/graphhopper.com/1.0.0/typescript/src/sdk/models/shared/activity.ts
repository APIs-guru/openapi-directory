import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseAddress } from "./responseaddress";

export enum ActivityTypeEnum {
    Start = "start"
,    End = "end"
,    Service = "service"
,    PickupShipment = "pickupShipment"
,    DeliverShipment = "deliverShipment"
,    Pickup = "pickup"
,    Delivery = "delivery"
,    Break = "break"
}


export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: ResponseAddress;

  @Metadata({ data: "json, name=arr_date_time" })
  arrDateTime?: Date;

  @Metadata({ data: "json, name=arr_time" })
  arrTime?: number;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=driving_time" })
  drivingTime?: number;

  @Metadata({ data: "json, name=end_date_time" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=end_time" })
  endTime?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=load_after" })
  loadAfter?: number[];

  @Metadata({ data: "json, name=load_before" })
  loadBefore?: number[];

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=preparation_time" })
  preparationTime?: number;

  @Metadata({ data: "json, name=type" })
  type?: ActivityTypeEnum;

  @Metadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}
