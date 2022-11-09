import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsPeering } from "./dnspeering";


// ListDnsPeeringsResponse
/** 
 * Response message for list DNS peerings.
**/
export class ListDnsPeeringsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsPeerings", elemType: shared.DnsPeering })
  dnsPeerings?: DnsPeering[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
