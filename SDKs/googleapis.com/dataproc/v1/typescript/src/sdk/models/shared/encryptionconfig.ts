import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfig
/** 
 * Encryption settings for the cluster.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcePdKmsKeyName" })
  gcePdKmsKeyName?: string;
}
