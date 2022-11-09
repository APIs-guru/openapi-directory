import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Disk
/** 
 * Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both.
**/
export class Disk extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sizeGb" })
  sizeGb?: number;

  @Metadata({ data: "json, name=sourceImage" })
  sourceImage?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
