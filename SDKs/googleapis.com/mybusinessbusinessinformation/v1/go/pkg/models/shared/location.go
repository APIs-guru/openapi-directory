package shared



type Location struct {
    AdWordsLocationExtensions *AdWordsLocationExtensions `json:"adWordsLocationExtensions,omitempty"`
    Categories *Categories `json:"categories,omitempty"`
    Labels []string `json:"labels,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    Latlng *LatLng `json:"latlng,omitempty"`
    Metadata *Metadata `json:"metadata,omitempty"`
    MoreHours []MoreHours `json:"moreHours,omitempty"`
    Name *string `json:"name,omitempty"`
    OpenInfo *OpenInfo `json:"openInfo,omitempty"`
    PhoneNumbers *PhoneNumbers `json:"phoneNumbers,omitempty"`
    Profile *Profile `json:"profile,omitempty"`
    RegularHours *BusinessHours `json:"regularHours,omitempty"`
    RelationshipData *RelationshipData `json:"relationshipData,omitempty"`
    ServiceArea *ServiceAreaBusiness `json:"serviceArea,omitempty"`
    ServiceItems []ServiceItem `json:"serviceItems,omitempty"`
    SpecialHours *SpecialHours `json:"specialHours,omitempty"`
    StoreCode *string `json:"storeCode,omitempty"`
    StorefrontAddress *PostalAddress `json:"storefrontAddress,omitempty"`
    Title *string `json:"title,omitempty"`
    WebsiteURI *string `json:"websiteUri,omitempty"`
    
}

