package shared

type InteractionTypeEnum string

const (
	InteractionTypeEnumUnspecified InteractionTypeEnum = "UNSPECIFIED"
	InteractionTypeEnumView        InteractionTypeEnum = "VIEW"
	InteractionTypeEnumEdit        InteractionTypeEnum = "EDIT"
)

type Interaction struct {
	InteractionTime *string              `json:"interactionTime"`
	Principal       *Principal           `json:"principal"`
	Type            *InteractionTypeEnum `json:"type"`
}
