import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyRangeDataDiskAssignment
/** 
 * Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
export class KeyRangeDataDiskAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataDisk" })
  dataDisk?: string;

  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
