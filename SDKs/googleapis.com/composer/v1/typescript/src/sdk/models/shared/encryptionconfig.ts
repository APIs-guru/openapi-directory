import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfig
/** 
 * The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
