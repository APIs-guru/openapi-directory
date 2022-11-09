import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfig
/** 
 * Encryption settings for the cluster.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcePdKmsKeyName" })
  gcePdKmsKeyName?: string;
}
