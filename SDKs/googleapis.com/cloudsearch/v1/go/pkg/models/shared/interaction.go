package shared

type InteractionTypeEnum string

const (
	InteractionTypeEnumUnspecified InteractionTypeEnum = "UNSPECIFIED"
	InteractionTypeEnumView        InteractionTypeEnum = "VIEW"
	InteractionTypeEnumEdit        InteractionTypeEnum = "EDIT"
)

type Interaction struct {
	InteractionTime *string              `json:"interactionTime,omitempty"`
	Principal       *Principal           `json:"principal,omitempty"`
	Type            *InteractionTypeEnum `json:"type,omitempty"`
}
