package shared



type ListFirebaseProjectsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Results []FirebaseProject `json:"results,omitempty"`
    
}

