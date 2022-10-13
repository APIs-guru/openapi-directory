package shared

type PositionedObjectProperties struct {
	EmbeddedObject *EmbeddedObject              `json:"embeddedObject"`
	Positioning    *PositionedObjectPositioning `json:"positioning"`
}
