package shared

// PositionedObjectProperties
// Properties of a PositionedObject.
type PositionedObjectProperties struct {
	EmbeddedObject *EmbeddedObject              `json:"embeddedObject,omitempty"`
	Positioning    *PositionedObjectPositioning `json:"positioning,omitempty"`
}
