package shared

type Version struct {
	Build         *int32 `json:"Build,omitempty"`
	Major         *int32 `json:"Major,omitempty"`
	MajorRevision *int32 `json:"MajorRevision,omitempty"`
	Minor         *int32 `json:"Minor,omitempty"`
	MinorRevision *int32 `json:"MinorRevision,omitempty"`
	Revision      *int32 `json:"Revision,omitempty"`
}
