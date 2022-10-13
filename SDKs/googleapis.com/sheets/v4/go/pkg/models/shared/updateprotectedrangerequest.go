package shared

type UpdateProtectedRangeRequest struct {
	Fields         *string         `json:"fields"`
	ProtectedRange *ProtectedRange `json:"protectedRange"`
}
