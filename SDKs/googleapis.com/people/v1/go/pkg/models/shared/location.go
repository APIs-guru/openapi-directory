package shared

type Location struct {
	BuildingID   *string        `json:"buildingId"`
	Current      *bool          `json:"current"`
	DeskCode     *string        `json:"deskCode"`
	Floor        *string        `json:"floor"`
	FloorSection *string        `json:"floorSection"`
	Metadata     *FieldMetadata `json:"metadata"`
	Type         *string        `json:"type"`
	Value        *string        `json:"value"`
}
