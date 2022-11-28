package shared

type EntityTypeEnum string

const (
	EntityTypeEnumUnknown      EntityTypeEnum = "UNKNOWN"
	EntityTypeEnumPerson       EntityTypeEnum = "PERSON"
	EntityTypeEnumLocation     EntityTypeEnum = "LOCATION"
	EntityTypeEnumOrganization EntityTypeEnum = "ORGANIZATION"
	EntityTypeEnumEvent        EntityTypeEnum = "EVENT"
	EntityTypeEnumWorkOfArt    EntityTypeEnum = "WORK_OF_ART"
	EntityTypeEnumConsumerGood EntityTypeEnum = "CONSUMER_GOOD"
	EntityTypeEnumOther        EntityTypeEnum = "OTHER"
	EntityTypeEnumPhoneNumber  EntityTypeEnum = "PHONE_NUMBER"
	EntityTypeEnumAddress      EntityTypeEnum = "ADDRESS"
	EntityTypeEnumDate         EntityTypeEnum = "DATE"
	EntityTypeEnumNumber       EntityTypeEnum = "NUMBER"
	EntityTypeEnumPrice        EntityTypeEnum = "PRICE"
)

// Entity
// Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
type Entity struct {
	Mentions  []EntityMention   `json:"mentions,omitempty"`
	Metadata  map[string]string `json:"metadata,omitempty"`
	Name      *string           `json:"name,omitempty"`
	Salience  *float32          `json:"salience,omitempty"`
	Sentiment *Sentiment        `json:"sentiment,omitempty"`
	Type      *EntityTypeEnum   `json:"type,omitempty"`
}
