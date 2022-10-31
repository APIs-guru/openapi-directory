package shared

type BulkEditAssignedLocationsRequest struct {
	CreatedAssignedLocations []AssignedLocation `json:"createdAssignedLocations,omitempty"`
	DeletedAssignedLocations []string           `json:"deletedAssignedLocations,omitempty"`
}
