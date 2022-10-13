package shared

type BulkMuteFindingsRequest struct {
	Filter         *string `json:"filter"`
	MuteAnnotation *string `json:"muteAnnotation"`
}
