import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataDiskAssignment
/** 
 * Data disk assignment for a given VM instance.
**/
export class DataDiskAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataDisks" })
  dataDisks?: string[];

  @Metadata({ data: "json, name=vmInstance" })
  vmInstance?: string;
}
