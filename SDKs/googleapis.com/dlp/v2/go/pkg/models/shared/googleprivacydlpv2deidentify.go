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

// GooglePrivacyDlpV2Deidentify
// Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect
type GooglePrivacyDlpV2Deidentify struct {
	CloudStorageOutput                 *string                                                `json:"cloudStorageOutput,omitempty"`
	FileTypesToTransform               []GooglePrivacyDlpV2DeidentifyFileTypesToTransformEnum `json:"fileTypesToTransform,omitempty"`
	TransformationConfig               *GooglePrivacyDlpV2TransformationConfig                `json:"transformationConfig,omitempty"`
	TransformationDetailsStorageConfig *GooglePrivacyDlpV2TransformationDetailsStorageConfig  `json:"transformationDetailsStorageConfig,omitempty"`
}
