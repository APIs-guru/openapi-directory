package shared

type GroupOrSegment struct {
	Group   *SchemaGroup   `json:"group,omitempty"`
	Segment *SchemaSegment `json:"segment,omitempty"`
}
