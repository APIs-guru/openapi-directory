import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MountedDataDisk
/** 
 * Describes mounted data disk.
**/
export class MountedDataDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataDisk" })
  dataDisk?: string;
}
