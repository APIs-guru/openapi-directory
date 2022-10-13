package shared

type Annotations struct {
	Items         []Annotation `json:"items"`
	Kind          *string      `json:"kind"`
	NextPageToken *string      `json:"nextPageToken"`
	TotalItems    *int32       `json:"totalItems"`
}
