import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionConfig
/** 
 * Represents a custom encryption key configuration that can be applied to a resource. This will encrypt all disks in Virtual Machine.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;
}
