package shared

type PersonAgeRangeEnum string

const (
	PersonAgeRangeEnumAgeRangeUnspecified PersonAgeRangeEnum = "AGE_RANGE_UNSPECIFIED"
	PersonAgeRangeEnumLessThanEighteen    PersonAgeRangeEnum = "LESS_THAN_EIGHTEEN"
	PersonAgeRangeEnumEighteenToTwenty    PersonAgeRangeEnum = "EIGHTEEN_TO_TWENTY"
	PersonAgeRangeEnumTwentyOneOrOlder    PersonAgeRangeEnum = "TWENTY_ONE_OR_OLDER"
)

type Person struct {
	Addresses             []Address              `json:"addresses"`
	AgeRange              *PersonAgeRangeEnum    `json:"ageRange"`
	AgeRanges             []AgeRangeType         `json:"ageRanges"`
	Biographies           []Biography            `json:"biographies"`
	Birthdays             []Birthday             `json:"birthdays"`
	BraggingRights        []BraggingRights       `json:"braggingRights"`
	CalendarUrls          []CalendarURL          `json:"calendarUrls"`
	ClientData            []ClientData           `json:"clientData"`
	CoverPhotos           []CoverPhoto           `json:"coverPhotos"`
	EmailAddresses        []EmailAddress         `json:"emailAddresses"`
	Etag                  *string                `json:"etag"`
	Events                []Event                `json:"events"`
	ExternalIds           []ExternalID           `json:"externalIds"`
	FileAses              []FileAs               `json:"fileAses"`
	Genders               []Gender               `json:"genders"`
	ImClients             []ImClient             `json:"imClients"`
	Interests             []Interest             `json:"interests"`
	Locales               []Locale               `json:"locales"`
	Locations             []Location             `json:"locations"`
	Memberships           []Membership           `json:"memberships"`
	Metadata              *PersonMetadata        `json:"metadata"`
	MiscKeywords          []MiscKeyword          `json:"miscKeywords"`
	Names                 []Name                 `json:"names"`
	Nicknames             []Nickname             `json:"nicknames"`
	Occupations           []Occupation           `json:"occupations"`
	Organizations         []Organization         `json:"organizations"`
	PhoneNumbers          []PhoneNumber          `json:"phoneNumbers"`
	Photos                []Photo                `json:"photos"`
	Relations             []Relation             `json:"relations"`
	RelationshipInterests []RelationshipInterest `json:"relationshipInterests"`
	RelationshipStatuses  []RelationshipStatus   `json:"relationshipStatuses"`
	Residences            []Residence            `json:"residences"`
	ResourceName          *string                `json:"resourceName"`
	SipAddresses          []SipAddress           `json:"sipAddresses"`
	Skills                []Skill                `json:"skills"`
	Taglines              []Tagline              `json:"taglines"`
	Urls                  []URL                  `json:"urls"`
	UserDefined           []UserDefined          `json:"userDefined"`
}
