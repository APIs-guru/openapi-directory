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
)

type Entity struct {
	Mentions []EntityMention   `json:"mentions"`
	Metadata map[string]string `json:"metadata"`
	Name     *string           `json:"name"`
	Salience *float32          `json:"salience"`
	Type     *EntityTypeEnum   `json:"type"`
}
