package shared

type Location struct {
	AdWordsLocationExtensions *AdWordsLocationExtensions `json:"adWordsLocationExtensions"`
	Categories                *Categories                `json:"categories"`
	Labels                    []string                   `json:"labels"`
	LanguageCode              *string                    `json:"languageCode"`
	Latlng                    *LatLng                    `json:"latlng"`
	Metadata                  *Metadata                  `json:"metadata"`
	MoreHours                 []MoreHours                `json:"moreHours"`
	Name                      *string                    `json:"name"`
	OpenInfo                  *OpenInfo                  `json:"openInfo"`
	PhoneNumbers              *PhoneNumbers              `json:"phoneNumbers"`
	Profile                   *Profile                   `json:"profile"`
	RegularHours              *BusinessHours             `json:"regularHours"`
	RelationshipData          *RelationshipData          `json:"relationshipData"`
	ServiceArea               *ServiceAreaBusiness       `json:"serviceArea"`
	ServiceItems              []ServiceItem              `json:"serviceItems"`
	SpecialHours              *SpecialHours              `json:"specialHours"`
	StoreCode                 *string                    `json:"storeCode"`
	StorefrontAddress         *PostalAddress             `json:"storefrontAddress"`
	Title                     *string                    `json:"title"`
	WebsiteURI                *string                    `json:"websiteUri"`
}
