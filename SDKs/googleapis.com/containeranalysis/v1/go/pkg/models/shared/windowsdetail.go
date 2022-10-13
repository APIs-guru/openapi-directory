package shared

type WindowsDetail struct {
	CpeURI      *string         `json:"cpeUri"`
	Description *string         `json:"description"`
	FixingKbs   []KnowledgeBase `json:"fixingKbs"`
	Name        *string         `json:"name"`
}
