import { SpeakeasyBase } from "../../../internal/utils";
import { Peering } from "./peering";
/**
 * ListPeeringsResponse is the response message for ListPeerings method.
**/
export declare class ListPeeringsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    peerings?: Peering[];
    unreachable?: string[];
}
