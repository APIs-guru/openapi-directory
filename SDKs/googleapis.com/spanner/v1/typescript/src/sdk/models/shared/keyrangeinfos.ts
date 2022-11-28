import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyRangeInfo } from "./keyrangeinfo";



// KeyRangeInfos
/** 
 * A message representing a list of specific information for multiple key ranges.
**/
export class KeyRangeInfos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infos", elemType: KeyRangeInfo })
  infos?: KeyRangeInfo[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
