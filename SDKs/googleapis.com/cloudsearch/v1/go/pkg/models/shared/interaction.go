package shared

type InteractionTypeEnum string

const (
	InteractionTypeEnumUnspecified InteractionTypeEnum = "UNSPECIFIED"
	InteractionTypeEnumView        InteractionTypeEnum = "VIEW"
	InteractionTypeEnumEdit        InteractionTypeEnum = "EDIT"
)

// Interaction
// Represents an interaction between a user and an item.
type Interaction struct {
	InteractionTime *string              `json:"interactionTime,omitempty"`
	Principal       *Principal           `json:"principal,omitempty"`
	Type            *InteractionTypeEnum `json:"type,omitempty"`
}
