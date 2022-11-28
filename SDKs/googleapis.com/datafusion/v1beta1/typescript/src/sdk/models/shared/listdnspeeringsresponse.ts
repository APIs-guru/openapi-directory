import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsPeering } from "./dnspeering";



// ListDnsPeeringsResponse
/** 
 * Response message for list DNS peerings.
**/
export class ListDnsPeeringsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsPeerings", elemType: DnsPeering })
  dnsPeerings?: DnsPeering[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
