import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfig
/** 
 * Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
