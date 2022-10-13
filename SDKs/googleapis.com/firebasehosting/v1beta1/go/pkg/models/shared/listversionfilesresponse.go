package shared

type ListVersionFilesResponse struct {
	Files         []VersionFile `json:"files"`
	NextPageToken *string       `json:"nextPageToken"`
}
