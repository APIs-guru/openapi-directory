package shared



type ComposeRequestSourceObjectsObjectPreconditions struct {
    IfGenerationMatch *string `json:"ifGenerationMatch,omitempty"`
    
}

type ComposeRequestSourceObjects struct {
    Generation *string `json:"generation,omitempty"`
    Name *string `json:"name,omitempty"`
    ObjectPreconditions *ComposeRequestSourceObjectsObjectPreconditions `json:"objectPreconditions,omitempty"`
    
}

type ComposeRequest struct {
    Destination *Object `json:"destination,omitempty"`
    Kind *string `json:"kind,omitempty"`
    SourceObjects []ComposeRequestSourceObjects `json:"sourceObjects,omitempty"`
    
}

