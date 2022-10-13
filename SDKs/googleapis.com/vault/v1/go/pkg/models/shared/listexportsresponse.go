package shared

type ListExportsResponse struct {
	Exports       []Export `json:"exports"`
	NextPageToken *string  `json:"nextPageToken"`
}
