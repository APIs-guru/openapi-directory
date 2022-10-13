package shared

type DetectionsListResponse struct {
	Detections [][]DetectionsResource `json:"detections"`
}
