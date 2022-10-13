package shared

type PageMetaData struct {
	Number        *int64 `json:"number"`
	Size          *int64 `json:"size"`
	TotalElements *int64 `json:"total_elements"`
	TotalPages    *int64 `json:"total_pages"`
}
