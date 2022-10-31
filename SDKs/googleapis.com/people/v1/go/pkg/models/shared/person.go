package shared




type PersonAgeRangeEnum string

const (
    PersonAgeRangeEnumAgeRangeUnspecified PersonAgeRangeEnum = "AGE_RANGE_UNSPECIFIED"
PersonAgeRangeEnumLessThanEighteen PersonAgeRangeEnum = "LESS_THAN_EIGHTEEN"
PersonAgeRangeEnumEighteenToTwenty PersonAgeRangeEnum = "EIGHTEEN_TO_TWENTY"
PersonAgeRangeEnumTwentyOneOrOlder PersonAgeRangeEnum = "TWENTY_ONE_OR_OLDER"
)


type Person struct {
    Addresses []Address `json:"addresses,omitempty"`
    AgeRange *PersonAgeRangeEnum `json:"ageRange,omitempty"`
    AgeRanges []AgeRangeType `json:"ageRanges,omitempty"`
    Biographies []Biography `json:"biographies,omitempty"`
    Birthdays []Birthday `json:"birthdays,omitempty"`
    BraggingRights []BraggingRights `json:"braggingRights,omitempty"`
    CalendarUrls []CalendarURL `json:"calendarUrls,omitempty"`
    ClientData []ClientData `json:"clientData,omitempty"`
    CoverPhotos []CoverPhoto `json:"coverPhotos,omitempty"`
    EmailAddresses []EmailAddress `json:"emailAddresses,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Events []Event `json:"events,omitempty"`
    ExternalIds []ExternalID `json:"externalIds,omitempty"`
    FileAses []FileAs `json:"fileAses,omitempty"`
    Genders []Gender `json:"genders,omitempty"`
    ImClients []ImClient `json:"imClients,omitempty"`
    Interests []Interest `json:"interests,omitempty"`
    Locales []Locale `json:"locales,omitempty"`
    Locations []Location `json:"locations,omitempty"`
    Memberships []Membership `json:"memberships,omitempty"`
    Metadata *PersonMetadata `json:"metadata,omitempty"`
    MiscKeywords []MiscKeyword `json:"miscKeywords,omitempty"`
    Names []Name `json:"names,omitempty"`
    Nicknames []Nickname `json:"nicknames,omitempty"`
    Occupations []Occupation `json:"occupations,omitempty"`
    Organizations []Organization `json:"organizations,omitempty"`
    PhoneNumbers []PhoneNumber `json:"phoneNumbers,omitempty"`
    Photos []Photo `json:"photos,omitempty"`
    Relations []Relation `json:"relations,omitempty"`
    RelationshipInterests []RelationshipInterest `json:"relationshipInterests,omitempty"`
    RelationshipStatuses []RelationshipStatus `json:"relationshipStatuses,omitempty"`
    Residences []Residence `json:"residences,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    SipAddresses []SipAddress `json:"sipAddresses,omitempty"`
    Skills []Skill `json:"skills,omitempty"`
    Taglines []Tagline `json:"taglines,omitempty"`
    Urls []URL `json:"urls,omitempty"`
    UserDefined []UserDefined `json:"userDefined,omitempty"`
    
}

