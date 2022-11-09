import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkInfo
/** 
 * For display only. Metadata associated with a Compute Engine network.
**/
export class NetworkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=matchedIpRange" })
  matchedIpRange?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
