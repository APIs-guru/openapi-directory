package shared

type RemoteImageResult struct {
	Images           []RemoteImageInfo `json:"Images"`
	Providers        []string          `json:"Providers"`
	TotalRecordCount *int32            `json:"TotalRecordCount"`
}
