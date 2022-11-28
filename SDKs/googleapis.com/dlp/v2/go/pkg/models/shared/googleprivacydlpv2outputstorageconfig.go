package shared

type GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum string

const (
	GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnumOutputSchemaUnspecified GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum = "OUTPUT_SCHEMA_UNSPECIFIED"
	GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnumBasicColumns            GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum = "BASIC_COLUMNS"
	GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnumGcsColumns              GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum = "GCS_COLUMNS"
	GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnumDatastoreColumns        GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum = "DATASTORE_COLUMNS"
	GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnumBigQueryColumns         GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum = "BIG_QUERY_COLUMNS"
	GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnumAllColumns              GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum = "ALL_COLUMNS"
)

// GooglePrivacyDlpV2OutputStorageConfig
// Cloud repository for storing output.
type GooglePrivacyDlpV2OutputStorageConfig struct {
	OutputSchema *GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum `json:"outputSchema,omitempty"`
	Table        *GooglePrivacyDlpV2BigQueryTable                       `json:"table,omitempty"`
}
