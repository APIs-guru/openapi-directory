package shared

type Annotationsdata struct {
	Items         []GeoAnnotationdata `json:"items"`
	Kind          *string             `json:"kind"`
	NextPageToken *string             `json:"nextPageToken"`
	TotalItems    *int32              `json:"totalItems"`
}
