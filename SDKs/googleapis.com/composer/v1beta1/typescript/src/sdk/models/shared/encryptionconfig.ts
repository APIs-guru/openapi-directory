import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfig
/** 
 * The encryption options for the Cloud Composer environment and its dependencies. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
