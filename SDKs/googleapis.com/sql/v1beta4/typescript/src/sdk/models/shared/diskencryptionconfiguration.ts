import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskEncryptionConfiguration
/** 
 * Disk encryption configuration for an instance.
**/
export class DiskEncryptionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
