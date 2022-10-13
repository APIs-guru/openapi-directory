package shared

type ListAssignedLocationsResponse struct {
	AssignedLocations []AssignedLocation `json:"assignedLocations"`
	NextPageToken     *string            `json:"nextPageToken"`
}
