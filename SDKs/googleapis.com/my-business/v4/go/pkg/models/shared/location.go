package shared

// Location
// A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
type Location struct {
	AdWordsLocationExtensions *AdWordsLocationExtensions `json:"adWordsLocationExtensions,omitempty"`
	AdditionalCategories      []Category                 `json:"additionalCategories,omitempty"`
	AdditionalPhones          []string                   `json:"additionalPhones,omitempty"`
	Address                   *PostalAddress             `json:"address,omitempty"`
	Attributes                []Attribute                `json:"attributes,omitempty"`
	Labels                    []string                   `json:"labels,omitempty"`
	LanguageCode              *string                    `json:"languageCode,omitempty"`
	Latlng                    *LatLng                    `json:"latlng,omitempty"`
	LocationKey               *LocationKey               `json:"locationKey,omitempty"`
	LocationName              *string                    `json:"locationName,omitempty"`
	LocationState             *LocationState             `json:"locationState,omitempty"`
	Metadata                  *Metadata                  `json:"metadata,omitempty"`
	MoreHours                 []MoreHours                `json:"moreHours,omitempty"`
	Name                      *string                    `json:"name,omitempty"`
	OpenInfo                  *OpenInfo                  `json:"openInfo,omitempty"`
	PriceLists                []PriceList                `json:"priceLists,omitempty"`
	PrimaryCategory           *Category                  `json:"primaryCategory,omitempty"`
	PrimaryPhone              *string                    `json:"primaryPhone,omitempty"`
	Profile                   *Profile                   `json:"profile,omitempty"`
	RegularHours              *BusinessHours             `json:"regularHours,omitempty"`
	RelationshipData          *RelationshipData          `json:"relationshipData,omitempty"`
	ServiceArea               *ServiceAreaBusiness       `json:"serviceArea,omitempty"`
	SpecialHours              *SpecialHours              `json:"specialHours,omitempty"`
	StoreCode                 *string                    `json:"storeCode,omitempty"`
	WebsiteURL                *string                    `json:"websiteUrl,omitempty"`
}

// LocationInput
// A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
type LocationInput struct {
	AdWordsLocationExtensions *AdWordsLocationExtensions `json:"adWordsLocationExtensions,omitempty"`
	AdditionalCategories      []CategoryInput            `json:"additionalCategories,omitempty"`
	AdditionalPhones          []string                   `json:"additionalPhones,omitempty"`
	Address                   *PostalAddress             `json:"address,omitempty"`
	Attributes                []Attribute                `json:"attributes,omitempty"`
	Labels                    []string                   `json:"labels,omitempty"`
	LanguageCode              *string                    `json:"languageCode,omitempty"`
	Latlng                    *LatLng                    `json:"latlng,omitempty"`
	LocationKey               *LocationKey               `json:"locationKey,omitempty"`
	LocationName              *string                    `json:"locationName,omitempty"`
	LocationState             *LocationStateInput        `json:"locationState,omitempty"`
	Metadata                  *Metadata                  `json:"metadata,omitempty"`
	MoreHours                 []MoreHours                `json:"moreHours,omitempty"`
	Name                      *string                    `json:"name,omitempty"`
	OpenInfo                  *OpenInfo                  `json:"openInfo,omitempty"`
	PriceLists                []PriceList                `json:"priceLists,omitempty"`
	PrimaryCategory           *CategoryInput             `json:"primaryCategory,omitempty"`
	PrimaryPhone              *string                    `json:"primaryPhone,omitempty"`
	Profile                   *Profile                   `json:"profile,omitempty"`
	RegularHours              *BusinessHours             `json:"regularHours,omitempty"`
	RelationshipData          *RelationshipData          `json:"relationshipData,omitempty"`
	ServiceArea               *ServiceAreaBusiness       `json:"serviceArea,omitempty"`
	SpecialHours              *SpecialHours              `json:"specialHours,omitempty"`
	StoreCode                 *string                    `json:"storeCode,omitempty"`
	WebsiteURL                *string                    `json:"websiteUrl,omitempty"`
}
