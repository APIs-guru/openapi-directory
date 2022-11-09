import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskEncryptionConfiguration
/** 
 * Disk encryption configuration for an instance.
**/
export class DiskEncryptionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
