package shared

type PosStore struct {
	GcidCategory []string `json:"gcidCategory"`
	Kind         *string  `json:"kind"`
	PhoneNumber  *string  `json:"phoneNumber"`
	PlaceID      *string  `json:"placeId"`
	StoreAddress *string  `json:"storeAddress"`
	StoreCode    *string  `json:"storeCode"`
	StoreName    *string  `json:"storeName"`
	WebsiteURL   *string  `json:"websiteUrl"`
}
