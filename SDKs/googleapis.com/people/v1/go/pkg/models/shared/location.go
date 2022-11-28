package shared

// LocationInput
// A person's location.
type LocationInput struct {
	BuildingID   *string             `json:"buildingId,omitempty"`
	Current      *bool               `json:"current,omitempty"`
	DeskCode     *string             `json:"deskCode,omitempty"`
	Floor        *string             `json:"floor,omitempty"`
	FloorSection *string             `json:"floorSection,omitempty"`
	Metadata     *FieldMetadataInput `json:"metadata,omitempty"`
	Type         *string             `json:"type,omitempty"`
	Value        *string             `json:"value,omitempty"`
}

// Location
// A person's location.
type Location struct {
	BuildingID   *string        `json:"buildingId,omitempty"`
	Current      *bool          `json:"current,omitempty"`
	DeskCode     *string        `json:"deskCode,omitempty"`
	Floor        *string        `json:"floor,omitempty"`
	FloorSection *string        `json:"floorSection,omitempty"`
	Metadata     *FieldMetadata `json:"metadata,omitempty"`
	Type         *string        `json:"type,omitempty"`
	Value        *string        `json:"value,omitempty"`
}
