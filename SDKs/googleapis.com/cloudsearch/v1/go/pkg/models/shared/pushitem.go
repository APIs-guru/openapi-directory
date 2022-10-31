package shared




type PushItemTypeEnum string

const (
    PushItemTypeEnumUnspecified PushItemTypeEnum = "UNSPECIFIED"
PushItemTypeEnumModified PushItemTypeEnum = "MODIFIED"
PushItemTypeEnumNotModified PushItemTypeEnum = "NOT_MODIFIED"
PushItemTypeEnumRepositoryError PushItemTypeEnum = "REPOSITORY_ERROR"
PushItemTypeEnumRequeue PushItemTypeEnum = "REQUEUE"
)


type PushItem struct {
    ContentHash *string `json:"contentHash,omitempty"`
    MetadataHash *string `json:"metadataHash,omitempty"`
    Payload *string `json:"payload,omitempty"`
    Queue *string `json:"queue,omitempty"`
    RepositoryError *RepositoryError `json:"repositoryError,omitempty"`
    StructuredDataHash *string `json:"structuredDataHash,omitempty"`
    Type *PushItemTypeEnum `json:"type,omitempty"`
    
}

