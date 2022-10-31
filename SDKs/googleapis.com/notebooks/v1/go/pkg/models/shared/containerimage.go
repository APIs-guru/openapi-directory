package shared



type ContainerImage struct {
    Repository *string `json:"repository,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}

