package shared



type UserDataMapping struct {
    ArchiveTime *string `json:"archiveTime,omitempty"`
    Archived *bool `json:"archived,omitempty"`
    DataID *string `json:"dataId,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceAttributes []Attribute `json:"resourceAttributes,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

