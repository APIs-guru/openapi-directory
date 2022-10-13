package shared

type ListPhotoSequencesResponse struct {
	NextPageToken  *string     `json:"nextPageToken"`
	PhotoSequences []Operation `json:"photoSequences"`
}
