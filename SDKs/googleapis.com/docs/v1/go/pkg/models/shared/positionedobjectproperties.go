package shared

type PositionedObjectProperties struct {
	EmbeddedObject *EmbeddedObject              `json:"embeddedObject,omitempty"`
	Positioning    *PositionedObjectPositioning `json:"positioning,omitempty"`
}
