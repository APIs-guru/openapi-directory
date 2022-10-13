package shared

type PlaceActionLinkPlaceActionTypeEnum string

const (
	PlaceActionLinkPlaceActionTypeEnumPlaceActionTypeUnspecified PlaceActionLinkPlaceActionTypeEnum = "PLACE_ACTION_TYPE_UNSPECIFIED"
	PlaceActionLinkPlaceActionTypeEnumAppointment                PlaceActionLinkPlaceActionTypeEnum = "APPOINTMENT"
	PlaceActionLinkPlaceActionTypeEnumOnlineAppointment          PlaceActionLinkPlaceActionTypeEnum = "ONLINE_APPOINTMENT"
	PlaceActionLinkPlaceActionTypeEnumDiningReservation          PlaceActionLinkPlaceActionTypeEnum = "DINING_RESERVATION"
	PlaceActionLinkPlaceActionTypeEnumFoodOrdering               PlaceActionLinkPlaceActionTypeEnum = "FOOD_ORDERING"
	PlaceActionLinkPlaceActionTypeEnumFoodDelivery               PlaceActionLinkPlaceActionTypeEnum = "FOOD_DELIVERY"
	PlaceActionLinkPlaceActionTypeEnumFoodTakeout                PlaceActionLinkPlaceActionTypeEnum = "FOOD_TAKEOUT"
	PlaceActionLinkPlaceActionTypeEnumShopOnline                 PlaceActionLinkPlaceActionTypeEnum = "SHOP_ONLINE"
)

type PlaceActionLinkProviderTypeEnum string

const (
	PlaceActionLinkProviderTypeEnumProviderTypeUnspecified PlaceActionLinkProviderTypeEnum = "PROVIDER_TYPE_UNSPECIFIED"
	PlaceActionLinkProviderTypeEnumMerchant                PlaceActionLinkProviderTypeEnum = "MERCHANT"
	PlaceActionLinkProviderTypeEnumAggregator3P            PlaceActionLinkProviderTypeEnum = "AGGREGATOR_3P"
)

type PlaceActionLink struct {
	CreateTime      *string                             `json:"createTime"`
	IsEditable      *bool                               `json:"isEditable"`
	IsPreferred     *bool                               `json:"isPreferred"`
	Name            *string                             `json:"name"`
	PlaceActionType *PlaceActionLinkPlaceActionTypeEnum `json:"placeActionType"`
	ProviderType    *PlaceActionLinkProviderTypeEnum    `json:"providerType"`
	UpdateTime      *string                             `json:"updateTime"`
	URI             *string                             `json:"uri"`
}
