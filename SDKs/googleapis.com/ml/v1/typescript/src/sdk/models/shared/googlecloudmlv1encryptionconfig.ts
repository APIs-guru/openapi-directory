import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1EncryptionConfig
/** 
 * Represents a custom encryption key configuration that can be applied to a resource.
**/
export class GoogleCloudMlV1EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
