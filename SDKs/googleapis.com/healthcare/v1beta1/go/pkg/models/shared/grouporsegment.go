package shared

type GroupOrSegment struct {
	Group   *SchemaGroup   `json:"group"`
	Segment *SchemaSegment `json:"segment"`
}
