import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyRangeInfo } from "./keyrangeinfo";


// KeyRangeInfos
/** 
 * A message representing a list of specific information for multiple key ranges.
**/
export class KeyRangeInfos extends SpeakeasyBase {
  @Metadata({ data: "json, name=infos", elemType: shared.KeyRangeInfo })
  infos?: KeyRangeInfo[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
