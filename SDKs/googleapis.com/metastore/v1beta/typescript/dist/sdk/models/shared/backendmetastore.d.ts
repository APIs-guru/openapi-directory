import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BackendMetastoreMetastoreTypeEnum {
    MetastoreTypeUnspecified = "METASTORE_TYPE_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    DataprocMetastore = "DATAPROC_METASTORE"
}
/**
 * Represents a backend metastore for the federation.
**/
export declare class BackendMetastore extends SpeakeasyBase {
    metastoreType?: BackendMetastoreMetastoreTypeEnum;
    name?: string;
}
