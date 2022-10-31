package shared



type Environment struct {
    ContainerImage *ContainerImage `json:"containerImage,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    PostStartupScript *string `json:"postStartupScript,omitempty"`
    VMImage *VMImage `json:"vmImage,omitempty"`
    
}

