package shared



type ListAssignedLocationsResponse struct {
    AssignedLocations []AssignedLocation `json:"assignedLocations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

