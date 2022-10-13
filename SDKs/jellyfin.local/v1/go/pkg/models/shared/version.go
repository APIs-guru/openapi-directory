package shared

type Version struct {
	Build         *int32 `json:"Build" pathParam:"name=Build"`
	Major         *int32 `json:"Major" pathParam:"name=Major"`
	MajorRevision *int32 `json:"MajorRevision" pathParam:"name=MajorRevision"`
	Minor         *int32 `json:"Minor" pathParam:"name=Minor"`
	MinorRevision *int32 `json:"MinorRevision" pathParam:"name=MinorRevision"`
	Revision      *int32 `json:"Revision" pathParam:"name=Revision"`
}
