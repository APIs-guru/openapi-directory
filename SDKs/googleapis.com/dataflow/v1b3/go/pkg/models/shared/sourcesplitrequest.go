package shared

type SourceSplitRequest struct {
	Options *SourceSplitOptions `json:"options"`
	Source  *Source             `json:"source"`
}
