import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Peering } from "./peering";



// ListPeeringsResponse
/** 
 * ListPeeringsResponse is the response message for ListPeerings method.
**/
export class ListPeeringsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=peerings", elemType: Peering })
  peerings?: Peering[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
