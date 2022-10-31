package shared



type Metadata struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayOptions *ResultDisplayMetadata `json:"displayOptions,omitempty"`
    Fields []NamedProperty `json:"fields,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    Owner *Person `json:"owner,omitempty"`
    Source *Source `json:"source,omitempty"`
    ThumbnailURL *string `json:"thumbnailUrl,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

