package shared

// BulkEditAssignedLocationsRequestInput
// Request message for AssignedLocationService.BulkEditAssignedLocations.
type BulkEditAssignedLocationsRequestInput struct {
	CreatedAssignedLocations []AssignedLocationInput `json:"createdAssignedLocations,omitempty"`
	DeletedAssignedLocations []string                `json:"deletedAssignedLocations,omitempty"`
}
