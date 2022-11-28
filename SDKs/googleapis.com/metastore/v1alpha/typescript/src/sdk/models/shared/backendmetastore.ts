import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BackendMetastoreMetastoreTypeEnum {
    MetastoreTypeUnspecified = "METASTORE_TYPE_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    DataprocMetastore = "DATAPROC_METASTORE"
}


// BackendMetastore
/** 
 * Represents a backend metastore for the federation.
**/
export class BackendMetastore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metastoreType" })
  metastoreType?: BackendMetastoreMetastoreTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
