package shared



type ListPhotoSequencesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PhotoSequences []Operation `json:"photoSequences,omitempty"`
    
}

