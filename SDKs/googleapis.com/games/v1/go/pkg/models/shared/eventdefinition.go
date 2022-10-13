package shared

type EventDefinitionVisibilityEnum string

const (
	EventDefinitionVisibilityEnumEventVisibilityUnspecified EventDefinitionVisibilityEnum = "EVENT_VISIBILITY_UNSPECIFIED"
	EventDefinitionVisibilityEnumRevealed                   EventDefinitionVisibilityEnum = "REVEALED"
	EventDefinitionVisibilityEnumHidden                     EventDefinitionVisibilityEnum = "HIDDEN"
)

type EventDefinition struct {
	ChildEvents       []EventChild                   `json:"childEvents"`
	Description       *string                        `json:"description"`
	DisplayName       *string                        `json:"displayName"`
	ID                *string                        `json:"id"`
	ImageURL          *string                        `json:"imageUrl"`
	IsDefaultImageURL *bool                          `json:"isDefaultImageUrl"`
	Kind              *string                        `json:"kind"`
	Visibility        *EventDefinitionVisibilityEnum `json:"visibility"`
}
