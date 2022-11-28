import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LocationAssociationCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cover = "COVER",
    Profile = "PROFILE",
    Logo = "LOGO",
    Exterior = "EXTERIOR",
    Interior = "INTERIOR",
    Product = "PRODUCT",
    AtWork = "AT_WORK",
    FoodAndDrink = "FOOD_AND_DRINK",
    Menu = "MENU",
    CommonArea = "COMMON_AREA",
    Rooms = "ROOMS",
    Teams = "TEAMS",
    Additional = "ADDITIONAL"
}
/**
 * How the media item is associated with its location.
**/
export declare class LocationAssociation extends SpeakeasyBase {
    category?: LocationAssociationCategoryEnum;
    priceListItemId?: string;
}
