import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BandwidthLimit
/** 
 * Specifies a bandwidth limit for an agent pool.
**/
export class BandwidthLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitMbps" })
  limitMbps?: string;
}
