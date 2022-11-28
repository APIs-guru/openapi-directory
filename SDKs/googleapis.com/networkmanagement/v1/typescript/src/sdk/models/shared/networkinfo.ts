import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInfo
/** 
 * For display only. Metadata associated with a Compute Engine network.
**/
export class NetworkInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=matchedIpRange" })
  matchedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
