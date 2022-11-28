import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataDiskAssignment
/** 
 * Data disk assignment for a given VM instance.
**/
export class DataDiskAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataDisks" })
  dataDisks?: string[];

  @SpeakeasyMetadata({ data: "json, name=vmInstance" })
  vmInstance?: string;
}
