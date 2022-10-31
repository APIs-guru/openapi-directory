package shared



type Version struct {
    Build *int32 `json:"Build,omitempty" pathParam:"name=Build"`
    Major *int32 `json:"Major,omitempty" pathParam:"name=Major"`
    MajorRevision *int32 `json:"MajorRevision,omitempty" pathParam:"name=MajorRevision"`
    Minor *int32 `json:"Minor,omitempty" pathParam:"name=Minor"`
    MinorRevision *int32 `json:"MinorRevision,omitempty" pathParam:"name=MinorRevision"`
    Revision *int32 `json:"Revision,omitempty" pathParam:"name=Revision"`
    
}

