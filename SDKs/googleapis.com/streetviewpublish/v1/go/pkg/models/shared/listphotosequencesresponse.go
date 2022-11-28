package shared

// ListPhotoSequencesResponse
// Response to list all photo sequences that belong to a user.
type ListPhotoSequencesResponse struct {
	NextPageToken  *string     `json:"nextPageToken,omitempty"`
	PhotoSequences []Operation `json:"photoSequences,omitempty"`
}
