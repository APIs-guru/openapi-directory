package shared

type GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum string

const (
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumFileTypeUnspecified GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "FILE_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumBinaryFile          GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "BINARY_FILE"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumTextFile            GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "TEXT_FILE"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumImage               GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "IMAGE"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumWord                GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "WORD"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumPdf                 GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "PDF"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumAvro                GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "AVRO"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumCsv                 GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "CSV"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumTsv                 GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "TSV"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumPowerpoint          GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "POWERPOINT"
	GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnumExcel               GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum = "EXCEL"
)

type GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum string

const (
	GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnumSampleMethodUnspecified GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum = "SAMPLE_METHOD_UNSPECIFIED"
	GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnumTop                     GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum = "TOP"
	GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnumRandomStart             GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum = "RANDOM_START"
)

type GooglePrivacyDlpV2CloudStorageOptions struct {
	BytesLimitPerFile        *string                                                `json:"bytesLimitPerFile"`
	BytesLimitPerFilePercent *int32                                                 `json:"bytesLimitPerFilePercent"`
	FileSet                  *GooglePrivacyDlpV2FileSet                             `json:"fileSet"`
	FileTypes                []GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum   `json:"fileTypes"`
	FilesLimitPercent        *int32                                                 `json:"filesLimitPercent"`
	SampleMethod             *GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum `json:"sampleMethod"`
}
