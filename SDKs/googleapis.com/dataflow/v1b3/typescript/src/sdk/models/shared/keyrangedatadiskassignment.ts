import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyRangeDataDiskAssignment
/** 
 * Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
export class KeyRangeDataDiskAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataDisk" })
  dataDisk?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
