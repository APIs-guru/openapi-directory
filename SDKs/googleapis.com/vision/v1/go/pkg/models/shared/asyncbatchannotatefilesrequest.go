package shared

// AsyncBatchAnnotateFilesRequest
// Multiple async file annotation requests are batched into a single service call.
type AsyncBatchAnnotateFilesRequest struct {
	Parent   *string                    `json:"parent,omitempty"`
	Requests []AsyncAnnotateFileRequest `json:"requests,omitempty"`
}
