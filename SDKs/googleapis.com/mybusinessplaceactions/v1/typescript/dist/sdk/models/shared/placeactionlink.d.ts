import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PlaceActionLinkPlaceActionTypeEnum {
    PlaceActionTypeUnspecified = "PLACE_ACTION_TYPE_UNSPECIFIED",
    Appointment = "APPOINTMENT",
    OnlineAppointment = "ONLINE_APPOINTMENT",
    DiningReservation = "DINING_RESERVATION",
    FoodOrdering = "FOOD_ORDERING",
    FoodDelivery = "FOOD_DELIVERY",
    FoodTakeout = "FOOD_TAKEOUT",
    ShopOnline = "SHOP_ONLINE"
}
export declare enum PlaceActionLinkProviderTypeEnum {
    ProviderTypeUnspecified = "PROVIDER_TYPE_UNSPECIFIED",
    Merchant = "MERCHANT",
    Aggregator3P = "AGGREGATOR_3P"
}
/**
 * Represents a place action link and its attributes.
**/
export declare class PlaceActionLink extends SpeakeasyBase {
    createTime?: string;
    isEditable?: boolean;
    isPreferred?: boolean;
    name?: string;
    placeActionType?: PlaceActionLinkPlaceActionTypeEnum;
    providerType?: PlaceActionLinkProviderTypeEnum;
    updateTime?: string;
    uri?: string;
}
