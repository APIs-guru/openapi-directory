import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlaceActionLinkPlaceActionTypeEnum {
    PlaceActionTypeUnspecified = "PLACE_ACTION_TYPE_UNSPECIFIED"
,    Appointment = "APPOINTMENT"
,    OnlineAppointment = "ONLINE_APPOINTMENT"
,    DiningReservation = "DINING_RESERVATION"
,    FoodOrdering = "FOOD_ORDERING"
,    FoodDelivery = "FOOD_DELIVERY"
,    FoodTakeout = "FOOD_TAKEOUT"
,    ShopOnline = "SHOP_ONLINE"
}

export enum PlaceActionLinkProviderTypeEnum {
    ProviderTypeUnspecified = "PROVIDER_TYPE_UNSPECIFIED"
,    Merchant = "MERCHANT"
,    Aggregator3P = "AGGREGATOR_3P"
}


// PlaceActionLink
/** 
 * Represents a place action link and its attributes.
**/
export class PlaceActionLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=isEditable" })
  isEditable?: boolean;

  @Metadata({ data: "json, name=isPreferred" })
  isPreferred?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=placeActionType" })
  placeActionType?: PlaceActionLinkPlaceActionTypeEnum;

  @Metadata({ data: "json, name=providerType" })
  providerType?: PlaceActionLinkProviderTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
