package shared

type Location struct {
	AdWordsLocationExtensions *AdWordsLocationExtensions `json:"adWordsLocationExtensions"`
	AdditionalCategories      []Category                 `json:"additionalCategories"`
	AdditionalPhones          []string                   `json:"additionalPhones"`
	Address                   *PostalAddress             `json:"address"`
	Attributes                []Attribute                `json:"attributes"`
	Labels                    []string                   `json:"labels"`
	LanguageCode              *string                    `json:"languageCode"`
	Latlng                    *LatLng                    `json:"latlng"`
	LocationKey               *LocationKey               `json:"locationKey"`
	LocationName              *string                    `json:"locationName"`
	LocationState             *LocationState             `json:"locationState"`
	Metadata                  *Metadata                  `json:"metadata"`
	MoreHours                 []MoreHours                `json:"moreHours"`
	Name                      *string                    `json:"name"`
	OpenInfo                  *OpenInfo                  `json:"openInfo"`
	PriceLists                []PriceList                `json:"priceLists"`
	PrimaryCategory           *Category                  `json:"primaryCategory"`
	PrimaryPhone              *string                    `json:"primaryPhone"`
	Profile                   *Profile                   `json:"profile"`
	RegularHours              *BusinessHours             `json:"regularHours"`
	RelationshipData          *RelationshipData          `json:"relationshipData"`
	ServiceArea               *ServiceAreaBusiness       `json:"serviceArea"`
	SpecialHours              *SpecialHours              `json:"specialHours"`
	StoreCode                 *string                    `json:"storeCode"`
	WebsiteURL                *string                    `json:"websiteUrl"`
}
