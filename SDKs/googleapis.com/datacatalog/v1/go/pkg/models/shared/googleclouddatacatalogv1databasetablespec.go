package shared

type GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum string

const (
	GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnumTableTypeUnspecified GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum = "TABLE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnumNative               GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum = "NATIVE"
	GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnumExternal             GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum = "EXTERNAL"
)

type GoogleCloudDatacatalogV1DatabaseTableSpec struct {
	DataplexTable *GoogleCloudDatacatalogV1DataplexTableSpec         `json:"dataplexTable,omitempty"`
	Type          *GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum `json:"type,omitempty"`
}
