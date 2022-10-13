package shared

type LocationAssociationCategoryEnum string

const (
	LocationAssociationCategoryEnumCategoryUnspecified LocationAssociationCategoryEnum = "CATEGORY_UNSPECIFIED"
	LocationAssociationCategoryEnumCover               LocationAssociationCategoryEnum = "COVER"
	LocationAssociationCategoryEnumProfile             LocationAssociationCategoryEnum = "PROFILE"
	LocationAssociationCategoryEnumLogo                LocationAssociationCategoryEnum = "LOGO"
	LocationAssociationCategoryEnumExterior            LocationAssociationCategoryEnum = "EXTERIOR"
	LocationAssociationCategoryEnumInterior            LocationAssociationCategoryEnum = "INTERIOR"
	LocationAssociationCategoryEnumProduct             LocationAssociationCategoryEnum = "PRODUCT"
	LocationAssociationCategoryEnumAtWork              LocationAssociationCategoryEnum = "AT_WORK"
	LocationAssociationCategoryEnumFoodAndDrink        LocationAssociationCategoryEnum = "FOOD_AND_DRINK"
	LocationAssociationCategoryEnumMenu                LocationAssociationCategoryEnum = "MENU"
	LocationAssociationCategoryEnumCommonArea          LocationAssociationCategoryEnum = "COMMON_AREA"
	LocationAssociationCategoryEnumRooms               LocationAssociationCategoryEnum = "ROOMS"
	LocationAssociationCategoryEnumTeams               LocationAssociationCategoryEnum = "TEAMS"
	LocationAssociationCategoryEnumAdditional          LocationAssociationCategoryEnum = "ADDITIONAL"
)

type LocationAssociation struct {
	Category        *LocationAssociationCategoryEnum `json:"category"`
	PriceListItemID *string                          `json:"priceListItemId"`
}
