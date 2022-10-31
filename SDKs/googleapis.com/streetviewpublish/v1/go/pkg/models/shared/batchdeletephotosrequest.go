package shared

type BatchDeletePhotosRequest struct {
	PhotoIds []string `json:"photoIds,omitempty"`
}
