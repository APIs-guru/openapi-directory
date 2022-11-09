import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskEncryptionStatus
/** 
 * Disk encryption status for an instance.
**/
export class DiskEncryptionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;
}
