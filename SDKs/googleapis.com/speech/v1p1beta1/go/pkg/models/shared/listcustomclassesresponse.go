package shared

// ListCustomClassesResponse
// Message returned to the client by the `ListCustomClasses` method.
type ListCustomClassesResponse struct {
	CustomClasses []CustomClass `json:"customClasses,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
