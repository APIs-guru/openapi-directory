package shared

// SeqMapTaskOutputInfo
// Information about an output of a SeqMapTask.
type SeqMapTaskOutputInfo struct {
	Sink *Sink   `json:"sink,omitempty"`
	Tag  *string `json:"tag,omitempty"`
}
