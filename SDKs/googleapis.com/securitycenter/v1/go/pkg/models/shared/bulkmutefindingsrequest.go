package shared

// BulkMuteFindingsRequest
// Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.
type BulkMuteFindingsRequest struct {
	Filter         *string `json:"filter,omitempty"`
	MuteAnnotation *string `json:"muteAnnotation,omitempty"`
}
