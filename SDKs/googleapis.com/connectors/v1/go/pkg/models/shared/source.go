package shared




type SourceSourceTypeEnum string

const (
    SourceSourceTypeEnumSourceTypeUnspecified SourceSourceTypeEnum = "SOURCE_TYPE_UNSPECIFIED"
SourceSourceTypeEnumConfigVariable SourceSourceTypeEnum = "CONFIG_VARIABLE"
)


type Source struct {
    FieldID *string `json:"fieldId,omitempty"`
    SourceType *SourceSourceTypeEnum `json:"sourceType,omitempty"`
    
}

