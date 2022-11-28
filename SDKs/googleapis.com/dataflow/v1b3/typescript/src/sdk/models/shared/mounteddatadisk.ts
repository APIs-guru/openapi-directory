import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MountedDataDisk
/** 
 * Describes mounted data disk.
**/
export class MountedDataDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataDisk" })
  dataDisk?: string;
}
