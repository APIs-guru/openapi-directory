import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfig
/** 
 * Encryption settings for the service.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;
}
