import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfig
/** 
 * Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
