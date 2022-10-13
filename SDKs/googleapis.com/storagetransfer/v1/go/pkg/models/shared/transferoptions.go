package shared

type TransferOptionsOverwriteWhenEnum string

const (
	TransferOptionsOverwriteWhenEnumOverwriteWhenUnspecified TransferOptionsOverwriteWhenEnum = "OVERWRITE_WHEN_UNSPECIFIED"
	TransferOptionsOverwriteWhenEnumDifferent                TransferOptionsOverwriteWhenEnum = "DIFFERENT"
	TransferOptionsOverwriteWhenEnumNever                    TransferOptionsOverwriteWhenEnum = "NEVER"
	TransferOptionsOverwriteWhenEnumAlways                   TransferOptionsOverwriteWhenEnum = "ALWAYS"
)

type TransferOptions struct {
	DeleteObjectsFromSourceAfterTransfer  *bool                             `json:"deleteObjectsFromSourceAfterTransfer"`
	DeleteObjectsUniqueInSink             *bool                             `json:"deleteObjectsUniqueInSink"`
	MetadataOptions                       *MetadataOptions                  `json:"metadataOptions"`
	OverwriteObjectsAlreadyExistingInSink *bool                             `json:"overwriteObjectsAlreadyExistingInSink"`
	OverwriteWhen                         *TransferOptionsOverwriteWhenEnum `json:"overwriteWhen"`
}
