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
	Mentions []EntityMention   `json:"mentions,omitempty"`
	Metadata map[string]string `json:"metadata,omitempty"`
	Name     *string           `json:"name,omitempty"`
	Salience *float32          `json:"salience,omitempty"`
	Type     *EntityTypeEnum   `json:"type,omitempty"`
}
