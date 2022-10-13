package shared

type DiffVersionResponse struct {
	ObjectSizeBytes *string `json:"objectSizeBytes"`
	ObjectVersion   *string `json:"objectVersion"`
}
