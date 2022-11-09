import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BackendMetastoreMetastoreTypeEnum {
    MetastoreTypeUnspecified = "METASTORE_TYPE_UNSPECIFIED"
,    Bigquery = "BIGQUERY"
,    DataprocMetastore = "DATAPROC_METASTORE"
}


// BackendMetastore
/** 
 * Represents a backend metastore for the federation.
**/
export class BackendMetastore extends SpeakeasyBase {
  @Metadata({ data: "json, name=metastoreType" })
  metastoreType?: BackendMetastoreMetastoreTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
