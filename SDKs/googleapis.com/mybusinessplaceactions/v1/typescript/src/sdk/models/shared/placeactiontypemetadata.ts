import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlaceActionTypeMetadataPlaceActionTypeEnum {
    PlaceActionTypeUnspecified = "PLACE_ACTION_TYPE_UNSPECIFIED",
    Appointment = "APPOINTMENT",
    OnlineAppointment = "ONLINE_APPOINTMENT",
    DiningReservation = "DINING_RESERVATION",
    FoodOrdering = "FOOD_ORDERING",
    FoodDelivery = "FOOD_DELIVERY",
    FoodTakeout = "FOOD_TAKEOUT",
    ShopOnline = "SHOP_ONLINE"
}


// PlaceActionTypeMetadata
/** 
 * Metadata for supported place action types.
**/
export class PlaceActionTypeMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=placeActionType" })
  placeActionType?: PlaceActionTypeMetadataPlaceActionTypeEnum;
}
