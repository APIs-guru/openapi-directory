import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfig
/** 
 * Encryption configuration for a Cloud Spanner database.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
