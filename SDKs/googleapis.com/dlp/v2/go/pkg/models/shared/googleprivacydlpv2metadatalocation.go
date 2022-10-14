package shared

type GooglePrivacyDlpV2MetadataLocationTypeEnum string

const (
	GooglePrivacyDlpV2MetadataLocationTypeEnumMetadatatypeUnspecified GooglePrivacyDlpV2MetadataLocationTypeEnum = "METADATATYPE_UNSPECIFIED"
	GooglePrivacyDlpV2MetadataLocationTypeEnumStorageMetadata         GooglePrivacyDlpV2MetadataLocationTypeEnum = "STORAGE_METADATA"
)

type GooglePrivacyDlpV2MetadataLocation struct {
	StorageLabel *GooglePrivacyDlpV2StorageMetadataLabel     `json:"storageLabel,omitempty"`
	Type         *GooglePrivacyDlpV2MetadataLocationTypeEnum `json:"type,omitempty"`
}
