package shared

type BulkEditAssignedLocationsRequest struct {
	CreatedAssignedLocations []AssignedLocation `json:"createdAssignedLocations"`
	DeletedAssignedLocations []string           `json:"deletedAssignedLocations"`
}
