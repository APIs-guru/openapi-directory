import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1EncryptionConfig
/** 
 * Represents a custom encryption key configuration that can be applied to a resource.
**/
export class GoogleCloudMlV1EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
