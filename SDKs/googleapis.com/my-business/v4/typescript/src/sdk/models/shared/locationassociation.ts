import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocationAssociationCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    Cover = "COVER"
,    Profile = "PROFILE"
,    Logo = "LOGO"
,    Exterior = "EXTERIOR"
,    Interior = "INTERIOR"
,    Product = "PRODUCT"
,    AtWork = "AT_WORK"
,    FoodAndDrink = "FOOD_AND_DRINK"
,    Menu = "MENU"
,    CommonArea = "COMMON_AREA"
,    Rooms = "ROOMS"
,    Teams = "TEAMS"
,    Additional = "ADDITIONAL"
}


// LocationAssociation
/** 
 * How the media item is associated with its location.
**/
export class LocationAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: LocationAssociationCategoryEnum;

  @Metadata({ data: "json, name=priceListItemId" })
  priceListItemId?: string;
}
