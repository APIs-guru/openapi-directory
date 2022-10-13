package shared

type GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum string

const (
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumFileTypeUnspecified GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "FILE_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumBinaryFile          GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "BINARY_FILE"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumTextFile            GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "TEXT_FILE"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumImage               GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "IMAGE"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumWord                GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "WORD"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumPdf                 GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "PDF"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumAvro                GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "AVRO"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumCsv                 GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "CSV"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumTsv                 GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "TSV"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumPowerpoint          GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "POWERPOINT"
	GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnumExcel               GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum = "EXCEL"
)

type GooglePrivacyDlpV2Deidentify struct {
	CloudStorageOutput                 *string                                                `json:"cloudStorageOutput"`
	FileTypesToTransform               []GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum `json:"fileTypesToTransform"`
	TransformationConfig               *GooglePrivacyDlpV2TransformationConfig                `json:"transformationConfig"`
	TransformationDetailsStorageConfig *GooglePrivacyDlpV2TransformationDetailsStorageConfig  `json:"transformationDetailsStorageConfig"`
}
