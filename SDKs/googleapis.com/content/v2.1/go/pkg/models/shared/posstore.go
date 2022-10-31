package shared



type PosStore struct {
    GcidCategory []string `json:"gcidCategory,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    PlaceID *string `json:"placeId,omitempty"`
    StoreAddress *string `json:"storeAddress,omitempty"`
    StoreCode *string `json:"storeCode,omitempty"`
    StoreName *string `json:"storeName,omitempty"`
    WebsiteURL *string `json:"websiteUrl,omitempty"`
    
}

