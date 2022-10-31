package shared

type EventDefinitionVisibilityEnum string

const (
	EventDefinitionVisibilityEnumEventVisibilityUnspecified EventDefinitionVisibilityEnum = "EVENT_VISIBILITY_UNSPECIFIED"
	EventDefinitionVisibilityEnumRevealed                   EventDefinitionVisibilityEnum = "REVEALED"
	EventDefinitionVisibilityEnumHidden                     EventDefinitionVisibilityEnum = "HIDDEN"
)

type EventDefinition struct {
	ChildEvents       []EventChild                   `json:"childEvents,omitempty"`
	Description       *string                        `json:"description,omitempty"`
	DisplayName       *string                        `json:"displayName,omitempty"`
	ID                *string                        `json:"id,omitempty"`
	ImageURL          *string                        `json:"imageUrl,omitempty"`
	IsDefaultImageURL *bool                          `json:"isDefaultImageUrl,omitempty"`
	Kind              *string                        `json:"kind,omitempty"`
	Visibility        *EventDefinitionVisibilityEnum `json:"visibility,omitempty"`
}
