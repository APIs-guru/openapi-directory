package shared

type PersonAgeRangeEnum string

const (
	PersonAgeRangeEnumAgeRangeUnspecified PersonAgeRangeEnum = "AGE_RANGE_UNSPECIFIED"
	PersonAgeRangeEnumLessThanEighteen    PersonAgeRangeEnum = "LESS_THAN_EIGHTEEN"
	PersonAgeRangeEnumEighteenToTwenty    PersonAgeRangeEnum = "EIGHTEEN_TO_TWENTY"
	PersonAgeRangeEnumTwentyOneOrOlder    PersonAgeRangeEnum = "TWENTY_ONE_OR_OLDER"
)

// Person
// Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
type Person struct {
	Addresses             []Address              `json:"addresses,omitempty"`
	AgeRange              *PersonAgeRangeEnum    `json:"ageRange,omitempty"`
	AgeRanges             []AgeRangeType         `json:"ageRanges,omitempty"`
	Biographies           []Biography            `json:"biographies,omitempty"`
	Birthdays             []Birthday             `json:"birthdays,omitempty"`
	BraggingRights        []BraggingRights       `json:"braggingRights,omitempty"`
	CalendarUrls          []CalendarURL          `json:"calendarUrls,omitempty"`
	ClientData            []ClientData           `json:"clientData,omitempty"`
	CoverPhotos           []CoverPhoto           `json:"coverPhotos,omitempty"`
	EmailAddresses        []EmailAddress         `json:"emailAddresses,omitempty"`
	Etag                  *string                `json:"etag,omitempty"`
	Events                []Event                `json:"events,omitempty"`
	ExternalIds           []ExternalID           `json:"externalIds,omitempty"`
	FileAses              []FileAs               `json:"fileAses,omitempty"`
	Genders               []Gender               `json:"genders,omitempty"`
	ImClients             []ImClient             `json:"imClients,omitempty"`
	Interests             []Interest             `json:"interests,omitempty"`
	Locales               []Locale               `json:"locales,omitempty"`
	Locations             []Location             `json:"locations,omitempty"`
	Memberships           []Membership           `json:"memberships,omitempty"`
	Metadata              *PersonMetadata        `json:"metadata,omitempty"`
	MiscKeywords          []MiscKeyword          `json:"miscKeywords,omitempty"`
	Names                 []Name                 `json:"names,omitempty"`
	Nicknames             []Nickname             `json:"nicknames,omitempty"`
	Occupations           []Occupation           `json:"occupations,omitempty"`
	Organizations         []Organization         `json:"organizations,omitempty"`
	PhoneNumbers          []PhoneNumber          `json:"phoneNumbers,omitempty"`
	Photos                []Photo                `json:"photos,omitempty"`
	Relations             []Relation             `json:"relations,omitempty"`
	RelationshipInterests []RelationshipInterest `json:"relationshipInterests,omitempty"`
	RelationshipStatuses  []RelationshipStatus   `json:"relationshipStatuses,omitempty"`
	Residences            []Residence            `json:"residences,omitempty"`
	ResourceName          *string                `json:"resourceName,omitempty"`
	SipAddresses          []SipAddress           `json:"sipAddresses,omitempty"`
	Skills                []Skill                `json:"skills,omitempty"`
	Taglines              []Tagline              `json:"taglines,omitempty"`
	Urls                  []URL                  `json:"urls,omitempty"`
	UserDefined           []UserDefined          `json:"userDefined,omitempty"`
}

// PersonInput
// Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
type PersonInput struct {
	Addresses      []AddressInput        `json:"addresses,omitempty"`
	Biographies    []BiographyInput      `json:"biographies,omitempty"`
	Birthdays      []BirthdayInput       `json:"birthdays,omitempty"`
	BraggingRights []BraggingRightsInput `json:"braggingRights,omitempty"`
	CalendarUrls   []CalendarURLInput    `json:"calendarUrls,omitempty"`
	ClientData     []ClientDataInput     `json:"clientData,omitempty"`
	EmailAddresses []EmailAddressInput   `json:"emailAddresses,omitempty"`
	Etag           *string               `json:"etag,omitempty"`
	Events         []EventInput          `json:"events,omitempty"`
	ExternalIds    []ExternalIDInput     `json:"externalIds,omitempty"`
	FileAses       []FileAsInput         `json:"fileAses,omitempty"`
	Genders        []GenderInput         `json:"genders,omitempty"`
	ImClients      []ImClientInput       `json:"imClients,omitempty"`
	Interests      []InterestInput       `json:"interests,omitempty"`
	Locales        []LocaleInput         `json:"locales,omitempty"`
	Locations      []LocationInput       `json:"locations,omitempty"`
	Memberships    []MembershipInput     `json:"memberships,omitempty"`
	Metadata       *PersonMetadataInput  `json:"metadata,omitempty"`
	MiscKeywords   []MiscKeywordInput    `json:"miscKeywords,omitempty"`
	Names          []NameInput           `json:"names,omitempty"`
	Nicknames      []NicknameInput       `json:"nicknames,omitempty"`
	Occupations    []OccupationInput     `json:"occupations,omitempty"`
	Organizations  []OrganizationInput   `json:"organizations,omitempty"`
	PhoneNumbers   []PhoneNumberInput    `json:"phoneNumbers,omitempty"`
	Relations      []RelationInput       `json:"relations,omitempty"`
	Residences     []ResidenceInput      `json:"residences,omitempty"`
	ResourceName   *string               `json:"resourceName,omitempty"`
	SipAddresses   []SipAddressInput     `json:"sipAddresses,omitempty"`
	Skills         []SkillInput          `json:"skills,omitempty"`
	Urls           []URLInput            `json:"urls,omitempty"`
	UserDefined    []UserDefinedInput    `json:"userDefined,omitempty"`
}
