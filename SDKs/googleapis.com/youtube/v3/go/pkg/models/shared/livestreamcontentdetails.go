package shared

// LiveStreamContentDetails
// Detailed settings of a stream.
type LiveStreamContentDetails struct {
	ClosedCaptionsIngestionURL *string `json:"closedCaptionsIngestionUrl,omitempty"`
	IsReusable                 *bool   `json:"isReusable,omitempty"`
}
