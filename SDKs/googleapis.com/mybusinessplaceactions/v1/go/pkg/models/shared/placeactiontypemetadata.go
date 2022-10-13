package shared

type PlaceActionTypeMetadataPlaceActionTypeEnum string

const (
	PlaceActionTypeMetadataPlaceActionTypeEnumPlaceActionTypeUnspecified PlaceActionTypeMetadataPlaceActionTypeEnum = "PLACE_ACTION_TYPE_UNSPECIFIED"
	PlaceActionTypeMetadataPlaceActionTypeEnumAppointment                PlaceActionTypeMetadataPlaceActionTypeEnum = "APPOINTMENT"
	PlaceActionTypeMetadataPlaceActionTypeEnumOnlineAppointment          PlaceActionTypeMetadataPlaceActionTypeEnum = "ONLINE_APPOINTMENT"
	PlaceActionTypeMetadataPlaceActionTypeEnumDiningReservation          PlaceActionTypeMetadataPlaceActionTypeEnum = "DINING_RESERVATION"
	PlaceActionTypeMetadataPlaceActionTypeEnumFoodOrdering               PlaceActionTypeMetadataPlaceActionTypeEnum = "FOOD_ORDERING"
	PlaceActionTypeMetadataPlaceActionTypeEnumFoodDelivery               PlaceActionTypeMetadataPlaceActionTypeEnum = "FOOD_DELIVERY"
	PlaceActionTypeMetadataPlaceActionTypeEnumFoodTakeout                PlaceActionTypeMetadataPlaceActionTypeEnum = "FOOD_TAKEOUT"
	PlaceActionTypeMetadataPlaceActionTypeEnumShopOnline                 PlaceActionTypeMetadataPlaceActionTypeEnum = "SHOP_ONLINE"
)

type PlaceActionTypeMetadata struct {
	DisplayName     *string                                     `json:"displayName"`
	PlaceActionType *PlaceActionTypeMetadataPlaceActionTypeEnum `json:"placeActionType"`
}
