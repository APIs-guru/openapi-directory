package shared



type ListLocationListsResponse struct {
    LocationLists []LocationList `json:"locationLists,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

