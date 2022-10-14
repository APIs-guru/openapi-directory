package shared

type MetadataOptionsACLEnum string

const (
	MetadataOptionsACLEnumACLUnspecified              MetadataOptionsACLEnum = "ACL_UNSPECIFIED"
	MetadataOptionsACLEnumACLDestinationBucketDefault MetadataOptionsACLEnum = "ACL_DESTINATION_BUCKET_DEFAULT"
	MetadataOptionsACLEnumACLPreserve                 MetadataOptionsACLEnum = "ACL_PRESERVE"
)

type MetadataOptionsGidEnum string

const (
	MetadataOptionsGidEnumGidUnspecified MetadataOptionsGidEnum = "GID_UNSPECIFIED"
	MetadataOptionsGidEnumGidSkip        MetadataOptionsGidEnum = "GID_SKIP"
	MetadataOptionsGidEnumGidNumber      MetadataOptionsGidEnum = "GID_NUMBER"
)

type MetadataOptionsKmsKeyEnum string

const (
	MetadataOptionsKmsKeyEnumKmsKeyUnspecified              MetadataOptionsKmsKeyEnum = "KMS_KEY_UNSPECIFIED"
	MetadataOptionsKmsKeyEnumKmsKeyDestinationBucketDefault MetadataOptionsKmsKeyEnum = "KMS_KEY_DESTINATION_BUCKET_DEFAULT"
	MetadataOptionsKmsKeyEnumKmsKeyPreserve                 MetadataOptionsKmsKeyEnum = "KMS_KEY_PRESERVE"
)

type MetadataOptionsModeEnum string

const (
	MetadataOptionsModeEnumModeUnspecified MetadataOptionsModeEnum = "MODE_UNSPECIFIED"
	MetadataOptionsModeEnumModeSkip        MetadataOptionsModeEnum = "MODE_SKIP"
	MetadataOptionsModeEnumModePreserve    MetadataOptionsModeEnum = "MODE_PRESERVE"
)

type MetadataOptionsStorageClassEnum string

const (
	MetadataOptionsStorageClassEnumStorageClassUnspecified              MetadataOptionsStorageClassEnum = "STORAGE_CLASS_UNSPECIFIED"
	MetadataOptionsStorageClassEnumStorageClassDestinationBucketDefault MetadataOptionsStorageClassEnum = "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT"
	MetadataOptionsStorageClassEnumStorageClassPreserve                 MetadataOptionsStorageClassEnum = "STORAGE_CLASS_PRESERVE"
	MetadataOptionsStorageClassEnumStorageClassStandard                 MetadataOptionsStorageClassEnum = "STORAGE_CLASS_STANDARD"
	MetadataOptionsStorageClassEnumStorageClassNearline                 MetadataOptionsStorageClassEnum = "STORAGE_CLASS_NEARLINE"
	MetadataOptionsStorageClassEnumStorageClassColdline                 MetadataOptionsStorageClassEnum = "STORAGE_CLASS_COLDLINE"
	MetadataOptionsStorageClassEnumStorageClassArchive                  MetadataOptionsStorageClassEnum = "STORAGE_CLASS_ARCHIVE"
)

type MetadataOptionsSymlinkEnum string

const (
	MetadataOptionsSymlinkEnumSymlinkUnspecified MetadataOptionsSymlinkEnum = "SYMLINK_UNSPECIFIED"
	MetadataOptionsSymlinkEnumSymlinkSkip        MetadataOptionsSymlinkEnum = "SYMLINK_SKIP"
	MetadataOptionsSymlinkEnumSymlinkPreserve    MetadataOptionsSymlinkEnum = "SYMLINK_PRESERVE"
)

type MetadataOptionsTemporaryHoldEnum string

const (
	MetadataOptionsTemporaryHoldEnumTemporaryHoldUnspecified MetadataOptionsTemporaryHoldEnum = "TEMPORARY_HOLD_UNSPECIFIED"
	MetadataOptionsTemporaryHoldEnumTemporaryHoldSkip        MetadataOptionsTemporaryHoldEnum = "TEMPORARY_HOLD_SKIP"
	MetadataOptionsTemporaryHoldEnumTemporaryHoldPreserve    MetadataOptionsTemporaryHoldEnum = "TEMPORARY_HOLD_PRESERVE"
)

type MetadataOptionsTimeCreatedEnum string

const (
	MetadataOptionsTimeCreatedEnumTimeCreatedUnspecified          MetadataOptionsTimeCreatedEnum = "TIME_CREATED_UNSPECIFIED"
	MetadataOptionsTimeCreatedEnumTimeCreatedSkip                 MetadataOptionsTimeCreatedEnum = "TIME_CREATED_SKIP"
	MetadataOptionsTimeCreatedEnumTimeCreatedPreserveAsCustomTime MetadataOptionsTimeCreatedEnum = "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME"
)

type MetadataOptionsUIDEnum string

const (
	MetadataOptionsUIDEnumUIDUnspecified MetadataOptionsUIDEnum = "UID_UNSPECIFIED"
	MetadataOptionsUIDEnumUIDSkip        MetadataOptionsUIDEnum = "UID_SKIP"
	MetadataOptionsUIDEnumUIDNumber      MetadataOptionsUIDEnum = "UID_NUMBER"
)

type MetadataOptions struct {
	ACL           *MetadataOptionsACLEnum           `json:"acl,omitempty"`
	Gid           *MetadataOptionsGidEnum           `json:"gid,omitempty"`
	KmsKey        *MetadataOptionsKmsKeyEnum        `json:"kmsKey,omitempty"`
	Mode          *MetadataOptionsModeEnum          `json:"mode,omitempty"`
	StorageClass  *MetadataOptionsStorageClassEnum  `json:"storageClass,omitempty"`
	Symlink       *MetadataOptionsSymlinkEnum       `json:"symlink,omitempty"`
	TemporaryHold *MetadataOptionsTemporaryHoldEnum `json:"temporaryHold,omitempty"`
	TimeCreated   *MetadataOptionsTimeCreatedEnum   `json:"timeCreated,omitempty"`
	UID           *MetadataOptionsUIDEnum           `json:"uid,omitempty"`
}
