package shared




type FieldMetadataActionEnum string

const (
    FieldMetadataActionEnumActionUnspecified FieldMetadataActionEnum = "ACTION_UNSPECIFIED"
FieldMetadataActionEnumTransform FieldMetadataActionEnum = "TRANSFORM"
FieldMetadataActionEnumInspectAndTransform FieldMetadataActionEnum = "INSPECT_AND_TRANSFORM"
FieldMetadataActionEnumDoNotTransform FieldMetadataActionEnum = "DO_NOT_TRANSFORM"
)


type FieldMetadata struct {
    Action *FieldMetadataActionEnum `json:"action,omitempty"`
    Paths []string `json:"paths,omitempty"`
    
}

