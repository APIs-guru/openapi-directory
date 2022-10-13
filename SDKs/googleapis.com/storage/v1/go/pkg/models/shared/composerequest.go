package shared

type ComposeRequestSourceObjectsObjectPreconditions struct {
	IfGenerationMatch *string `json:"ifGenerationMatch"`
}

type ComposeRequestSourceObjects struct {
	Generation          *string                                         `json:"generation"`
	Name                *string                                         `json:"name"`
	ObjectPreconditions *ComposeRequestSourceObjectsObjectPreconditions `json:"objectPreconditions"`
}

type ComposeRequest struct {
	Destination   *Object                       `json:"destination"`
	Kind          *string                       `json:"kind"`
	SourceObjects []ComposeRequestSourceObjects `json:"sourceObjects"`
}
