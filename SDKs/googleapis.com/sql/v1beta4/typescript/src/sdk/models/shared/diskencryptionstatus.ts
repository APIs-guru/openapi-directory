import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskEncryptionStatus
/** 
 * Disk encryption status for an instance.
**/
export class DiskEncryptionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;
}
