package shared

type BackendMetastoreMetastoreTypeEnum string

const (
	BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified BackendMetastoreMetastoreTypeEnum = "METASTORE_TYPE_UNSPECIFIED"
	BackendMetastoreMetastoreTypeEnumBigquery                 BackendMetastoreMetastoreTypeEnum = "BIGQUERY"
	BackendMetastoreMetastoreTypeEnumDataprocMetastore        BackendMetastoreMetastoreTypeEnum = "DATAPROC_METASTORE"
)

type BackendMetastore struct {
	MetastoreType *BackendMetastoreMetastoreTypeEnum `json:"metastoreType"`
	Name          *string                            `json:"name"`
}
