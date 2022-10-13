package shared

type DimensionValueList struct {
	Etag          *string          `json:"etag"`
	Items         []DimensionValue `json:"items"`
	Kind          *string          `json:"kind"`
	NextPageToken *string          `json:"nextPageToken"`
}
