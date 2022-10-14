package shared

type ItemStatusCodeEnum string

const (
	ItemStatusCodeEnumCodeUnspecified ItemStatusCodeEnum = "CODE_UNSPECIFIED"
	ItemStatusCodeEnumError           ItemStatusCodeEnum = "ERROR"
	ItemStatusCodeEnumModified        ItemStatusCodeEnum = "MODIFIED"
	ItemStatusCodeEnumNewItem         ItemStatusCodeEnum = "NEW_ITEM"
	ItemStatusCodeEnumAccepted        ItemStatusCodeEnum = "ACCEPTED"
)

type ItemStatus struct {
	Code             *ItemStatusCodeEnum `json:"code,omitempty"`
	ProcessingErrors []ProcessingError   `json:"processingErrors,omitempty"`
	RepositoryErrors []RepositoryError   `json:"repositoryErrors,omitempty"`
}
