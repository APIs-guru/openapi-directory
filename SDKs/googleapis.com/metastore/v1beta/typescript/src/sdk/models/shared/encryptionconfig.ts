import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfig
/** 
 * Encryption settings for the service.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;
}
