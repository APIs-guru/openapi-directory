package shared

type GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum string

const (
	GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnumTableSourceTypeUnspecified GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum = "TABLE_SOURCE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnumBigqueryView               GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum = "BIGQUERY_VIEW"
	GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnumBigqueryTable              GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum = "BIGQUERY_TABLE"
	GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnumBigqueryMaterializedView   GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum = "BIGQUERY_MATERIALIZED_VIEW"
)

type GoogleCloudDatacatalogV1beta1BigQueryTableSpec struct {
	TableSourceType *GoogleCloudDatacatalogV1beta1BigQueryTableSpecTableSourceTypeEnum `json:"tableSourceType"`
	TableSpec       *GoogleCloudDatacatalogV1beta1TableSpec                            `json:"tableSpec"`
	ViewSpec        *GoogleCloudDatacatalogV1beta1ViewSpec                             `json:"viewSpec"`
}
