package shared

type GoogleCloudContactcenterinsightsV1EntityTypeEnum string

const (
	GoogleCloudContactcenterinsightsV1EntityTypeEnumTypeUnspecified GoogleCloudContactcenterinsightsV1EntityTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumPerson          GoogleCloudContactcenterinsightsV1EntityTypeEnum = "PERSON"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumLocation        GoogleCloudContactcenterinsightsV1EntityTypeEnum = "LOCATION"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumOrganization    GoogleCloudContactcenterinsightsV1EntityTypeEnum = "ORGANIZATION"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumEvent           GoogleCloudContactcenterinsightsV1EntityTypeEnum = "EVENT"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumWorkOfArt       GoogleCloudContactcenterinsightsV1EntityTypeEnum = "WORK_OF_ART"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumConsumerGood    GoogleCloudContactcenterinsightsV1EntityTypeEnum = "CONSUMER_GOOD"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumOther           GoogleCloudContactcenterinsightsV1EntityTypeEnum = "OTHER"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumPhoneNumber     GoogleCloudContactcenterinsightsV1EntityTypeEnum = "PHONE_NUMBER"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumAddress         GoogleCloudContactcenterinsightsV1EntityTypeEnum = "ADDRESS"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumDate            GoogleCloudContactcenterinsightsV1EntityTypeEnum = "DATE"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumNumber          GoogleCloudContactcenterinsightsV1EntityTypeEnum = "NUMBER"
	GoogleCloudContactcenterinsightsV1EntityTypeEnumPrice           GoogleCloudContactcenterinsightsV1EntityTypeEnum = "PRICE"
)

// GoogleCloudContactcenterinsightsV1Entity
// The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
type GoogleCloudContactcenterinsightsV1Entity struct {
	DisplayName *string                                           `json:"displayName,omitempty"`
	Metadata    map[string]string                                 `json:"metadata,omitempty"`
	Salience    *float32                                          `json:"salience,omitempty"`
	Sentiment   *GoogleCloudContactcenterinsightsV1SentimentData  `json:"sentiment,omitempty"`
	Type        *GoogleCloudContactcenterinsightsV1EntityTypeEnum `json:"type,omitempty"`
}
