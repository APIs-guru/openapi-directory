package shared

// BatchUpdateFormRequestInput
// A batch of updates to perform on a form. All the specified updates are made or none of them are.
type BatchUpdateFormRequestInput struct {
	IncludeFormInResponse *bool          `json:"includeFormInResponse,omitempty"`
	Requests              []RequestInput `json:"requests,omitempty"`
	WriteControl          *WriteControl  `json:"writeControl,omitempty"`
}
