package shared

type TransferOptionsOverwriteWhenEnum string

const (
	TransferOptionsOverwriteWhenEnumOverwriteWhenUnspecified TransferOptionsOverwriteWhenEnum = "OVERWRITE_WHEN_UNSPECIFIED"
	TransferOptionsOverwriteWhenEnumDifferent                TransferOptionsOverwriteWhenEnum = "DIFFERENT"
	TransferOptionsOverwriteWhenEnumNever                    TransferOptionsOverwriteWhenEnum = "NEVER"
	TransferOptionsOverwriteWhenEnumAlways                   TransferOptionsOverwriteWhenEnum = "ALWAYS"
)

type TransferOptions struct {
	DeleteObjectsFromSourceAfterTransfer  *bool                             `json:"deleteObjectsFromSourceAfterTransfer,omitempty"`
	DeleteObjectsUniqueInSink             *bool                             `json:"deleteObjectsUniqueInSink,omitempty"`
	MetadataOptions                       *MetadataOptions                  `json:"metadataOptions,omitempty"`
	OverwriteObjectsAlreadyExistingInSink *bool                             `json:"overwriteObjectsAlreadyExistingInSink,omitempty"`
	OverwriteWhen                         *TransferOptionsOverwriteWhenEnum `json:"overwriteWhen,omitempty"`
}
