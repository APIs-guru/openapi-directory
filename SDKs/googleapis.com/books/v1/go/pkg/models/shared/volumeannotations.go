package shared

type Volumeannotations struct {
	Items         []Volumeannotation `json:"items,omitempty"`
	Kind          *string            `json:"kind,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	TotalItems    *int32             `json:"totalItems,omitempty"`
	Version       *string            `json:"version,omitempty"`
}
