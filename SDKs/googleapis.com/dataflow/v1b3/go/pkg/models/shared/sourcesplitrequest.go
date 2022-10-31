package shared

type SourceSplitRequest struct {
	Options *SourceSplitOptions `json:"options,omitempty"`
	Source  *Source             `json:"source,omitempty"`
}
