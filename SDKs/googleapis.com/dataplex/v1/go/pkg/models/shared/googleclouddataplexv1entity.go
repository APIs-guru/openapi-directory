package shared

type GoogleCloudDataplexV1EntitySystemEnum string

const (
	GoogleCloudDataplexV1EntitySystemEnumStorageSystemUnspecified GoogleCloudDataplexV1EntitySystemEnum = "STORAGE_SYSTEM_UNSPECIFIED"
	GoogleCloudDataplexV1EntitySystemEnumCloudStorage             GoogleCloudDataplexV1EntitySystemEnum = "CLOUD_STORAGE"
	GoogleCloudDataplexV1EntitySystemEnumBigquery                 GoogleCloudDataplexV1EntitySystemEnum = "BIGQUERY"
)

type GoogleCloudDataplexV1EntityTypeEnum string

const (
	GoogleCloudDataplexV1EntityTypeEnumTypeUnspecified GoogleCloudDataplexV1EntityTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1EntityTypeEnumTable           GoogleCloudDataplexV1EntityTypeEnum = "TABLE"
	GoogleCloudDataplexV1EntityTypeEnumFileset         GoogleCloudDataplexV1EntityTypeEnum = "FILESET"
)

// GoogleCloudDataplexV1EntityInput
// Represents tables and fileset metadata contained within a zone.
type GoogleCloudDataplexV1EntityInput struct {
	Asset           *string                                         `json:"asset,omitempty"`
	Compatibility   *GoogleCloudDataplexV1EntityCompatibilityStatus `json:"compatibility,omitempty"`
	DataPath        *string                                         `json:"dataPath,omitempty"`
	DataPathPattern *string                                         `json:"dataPathPattern,omitempty"`
	Description     *string                                         `json:"description,omitempty"`
	DisplayName     *string                                         `json:"displayName,omitempty"`
	Etag            *string                                         `json:"etag,omitempty"`
	Format          *GoogleCloudDataplexV1StorageFormatInput        `json:"format,omitempty"`
	ID              *string                                         `json:"id,omitempty"`
	Schema          *GoogleCloudDataplexV1Schema                    `json:"schema,omitempty"`
	System          *GoogleCloudDataplexV1EntitySystemEnum          `json:"system,omitempty"`
	Type            *GoogleCloudDataplexV1EntityTypeEnum            `json:"type,omitempty"`
}

// GoogleCloudDataplexV1Entity
// Represents tables and fileset metadata contained within a zone.
type GoogleCloudDataplexV1Entity struct {
	Asset           *string                                         `json:"asset,omitempty"`
	CatalogEntry    *string                                         `json:"catalogEntry,omitempty"`
	Compatibility   *GoogleCloudDataplexV1EntityCompatibilityStatus `json:"compatibility,omitempty"`
	CreateTime      *string                                         `json:"createTime,omitempty"`
	DataPath        *string                                         `json:"dataPath,omitempty"`
	DataPathPattern *string                                         `json:"dataPathPattern,omitempty"`
	Description     *string                                         `json:"description,omitempty"`
	DisplayName     *string                                         `json:"displayName,omitempty"`
	Etag            *string                                         `json:"etag,omitempty"`
	Format          *GoogleCloudDataplexV1StorageFormat             `json:"format,omitempty"`
	ID              *string                                         `json:"id,omitempty"`
	Name            *string                                         `json:"name,omitempty"`
	Schema          *GoogleCloudDataplexV1Schema                    `json:"schema,omitempty"`
	System          *GoogleCloudDataplexV1EntitySystemEnum          `json:"system,omitempty"`
	Type            *GoogleCloudDataplexV1EntityTypeEnum            `json:"type,omitempty"`
	UpdateTime      *string                                         `json:"updateTime,omitempty"`
}
