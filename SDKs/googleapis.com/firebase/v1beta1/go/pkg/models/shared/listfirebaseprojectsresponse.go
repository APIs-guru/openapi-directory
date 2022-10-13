package shared

type ListFirebaseProjectsResponse struct {
	NextPageToken *string           `json:"nextPageToken"`
	Results       []FirebaseProject `json:"results"`
}
