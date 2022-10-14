package shared

type WindowsDetail struct {
	CpeURI      *string         `json:"cpeUri,omitempty"`
	Description *string         `json:"description,omitempty"`
	FixingKbs   []KnowledgeBase `json:"fixingKbs,omitempty"`
	Name        *string         `json:"name,omitempty"`
}
