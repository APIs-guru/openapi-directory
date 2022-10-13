package shared

type PushItemTypeEnum string

const (
	PushItemTypeEnumUnspecified     PushItemTypeEnum = "UNSPECIFIED"
	PushItemTypeEnumModified        PushItemTypeEnum = "MODIFIED"
	PushItemTypeEnumNotModified     PushItemTypeEnum = "NOT_MODIFIED"
	PushItemTypeEnumRepositoryError PushItemTypeEnum = "REPOSITORY_ERROR"
	PushItemTypeEnumRequeue         PushItemTypeEnum = "REQUEUE"
)

type PushItem struct {
	ContentHash        *string           `json:"contentHash"`
	MetadataHash       *string           `json:"metadataHash"`
	Payload            *string           `json:"payload"`
	Queue              *string           `json:"queue"`
	RepositoryError    *RepositoryError  `json:"repositoryError"`
	StructuredDataHash *string           `json:"structuredDataHash"`
	Type               *PushItemTypeEnum `json:"type"`
}
