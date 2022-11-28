package shared

// BulkEditAssignedLocationsResponse
// Response message for AssignedLocationService.BulkEditAssignedLocations.
type BulkEditAssignedLocationsResponse struct {
	AssignedLocations []AssignedLocation `json:"assignedLocations,omitempty"`
}
