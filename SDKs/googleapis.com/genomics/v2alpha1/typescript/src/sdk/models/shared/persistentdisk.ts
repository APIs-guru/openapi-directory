import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PersistentDisk
/** 
 * Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
**/
export class PersistentDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceImage" })
  sourceImage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
