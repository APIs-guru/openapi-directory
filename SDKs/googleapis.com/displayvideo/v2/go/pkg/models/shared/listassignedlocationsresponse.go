package shared

// ListAssignedLocationsResponse
// Response message for AssignedLocationService.ListAssignedLocations.
type ListAssignedLocationsResponse struct {
	AssignedLocations []AssignedLocation `json:"assignedLocations,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
}
