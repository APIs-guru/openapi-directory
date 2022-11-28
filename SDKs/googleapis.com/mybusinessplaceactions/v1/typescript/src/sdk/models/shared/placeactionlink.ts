import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlaceActionLinkPlaceActionTypeEnum {
    PlaceActionTypeUnspecified = "PLACE_ACTION_TYPE_UNSPECIFIED",
    Appointment = "APPOINTMENT",
    OnlineAppointment = "ONLINE_APPOINTMENT",
    DiningReservation = "DINING_RESERVATION",
    FoodOrdering = "FOOD_ORDERING",
    FoodDelivery = "FOOD_DELIVERY",
    FoodTakeout = "FOOD_TAKEOUT",
    ShopOnline = "SHOP_ONLINE"
}

export enum PlaceActionLinkProviderTypeEnum {
    ProviderTypeUnspecified = "PROVIDER_TYPE_UNSPECIFIED",
    Merchant = "MERCHANT",
    Aggregator3P = "AGGREGATOR_3P"
}


// PlaceActionLinkInput
/** 
 * Represents a place action link and its attributes.
**/
export class PlaceActionLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPreferred" })
  isPreferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=placeActionType" })
  placeActionType?: PlaceActionLinkPlaceActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// PlaceActionLink
/** 
 * Represents a place action link and its attributes.
**/
export class PlaceActionLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=isEditable" })
  isEditable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPreferred" })
  isPreferred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=placeActionType" })
  placeActionType?: PlaceActionLinkPlaceActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=providerType" })
  providerType?: PlaceActionLinkProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
