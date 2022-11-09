import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PersistentDisk
/** 
 * Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
**/
export class PersistentDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @Metadata({ data: "json, name=sourceImage" })
  sourceImage?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
