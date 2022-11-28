import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Disk
/** 
 * Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both.
**/
export class Disk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=sourceImage" })
  sourceImage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
