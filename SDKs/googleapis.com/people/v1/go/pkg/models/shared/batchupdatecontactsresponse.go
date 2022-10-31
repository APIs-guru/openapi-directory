package shared

type BatchUpdateContactsResponse struct {
	UpdateResult map[string]PersonResponse `json:"updateResult,omitempty"`
}
