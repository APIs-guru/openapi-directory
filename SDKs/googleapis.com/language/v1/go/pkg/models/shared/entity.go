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

type Entity struct {
	Mentions  []EntityMention   `json:"mentions"`
	Metadata  map[string]string `json:"metadata"`
	Name      *string           `json:"name"`
	Salience  *float32          `json:"salience"`
	Sentiment *Sentiment        `json:"sentiment"`
	Type      *EntityTypeEnum   `json:"type"`
}
