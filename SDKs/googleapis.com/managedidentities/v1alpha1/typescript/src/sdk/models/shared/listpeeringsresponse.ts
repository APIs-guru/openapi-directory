import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Peering } from "./peering";


// ListPeeringsResponse
/** 
 * ListPeeringsResponse is the response message for ListPeerings method.
**/
export class ListPeeringsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=peerings", elemType: shared.Peering })
  peerings?: Peering[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
