import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BandwidthLimit
/** 
 * Specifies a bandwidth limit for an agent pool.
**/
export class BandwidthLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitMbps" })
  limitMbps?: string;
}
