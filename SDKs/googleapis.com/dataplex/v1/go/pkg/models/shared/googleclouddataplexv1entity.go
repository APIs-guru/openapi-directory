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

type GoogleCloudDataplexV1Entity struct {
	Asset           *string                                         `json:"asset"`
	CatalogEntry    *string                                         `json:"catalogEntry"`
	Compatibility   *GoogleCloudDataplexV1EntityCompatibilityStatus `json:"compatibility"`
	CreateTime      *string                                         `json:"createTime"`
	DataPath        *string                                         `json:"dataPath"`
	DataPathPattern *string                                         `json:"dataPathPattern"`
	Description     *string                                         `json:"description"`
	DisplayName     *string                                         `json:"displayName"`
	Etag            *string                                         `json:"etag"`
	Format          *GoogleCloudDataplexV1StorageFormat             `json:"format"`
	ID              *string                                         `json:"id"`
	Name            *string                                         `json:"name"`
	Schema          *GoogleCloudDataplexV1Schema                    `json:"schema"`
	System          *GoogleCloudDataplexV1EntitySystemEnum          `json:"system"`
	Type            *GoogleCloudDataplexV1EntityTypeEnum            `json:"type"`
	UpdateTime      *string                                         `json:"updateTime"`
}
