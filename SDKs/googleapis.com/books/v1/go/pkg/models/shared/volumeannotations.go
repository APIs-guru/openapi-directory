package shared

type Volumeannotations struct {
	Items         []Volumeannotation `json:"items"`
	Kind          *string            `json:"kind"`
	NextPageToken *string            `json:"nextPageToken"`
	TotalItems    *int32             `json:"totalItems"`
	Version       *string            `json:"version"`
}
