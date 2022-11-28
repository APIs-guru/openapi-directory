package shared

type BackendMetastoreMetastoreTypeEnum string

const (
	BackendMetastoreMetastoreTypeEnumMetastoreTypeUnspecified BackendMetastoreMetastoreTypeEnum = "METASTORE_TYPE_UNSPECIFIED"
	BackendMetastoreMetastoreTypeEnumBigquery                 BackendMetastoreMetastoreTypeEnum = "BIGQUERY"
	BackendMetastoreMetastoreTypeEnumDataprocMetastore        BackendMetastoreMetastoreTypeEnum = "DATAPROC_METASTORE"
)

// BackendMetastore
// Represents a backend metastore for the federation.
type BackendMetastore struct {
	MetastoreType *BackendMetastoreMetastoreTypeEnum `json:"metastoreType,omitempty"`
	Name          *string                            `json:"name,omitempty"`
}
