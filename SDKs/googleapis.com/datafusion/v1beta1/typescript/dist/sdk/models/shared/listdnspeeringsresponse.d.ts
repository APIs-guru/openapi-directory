import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsPeering } from "./dnspeering";
/**
 * Response message for list DNS peerings.
**/
export declare class ListDnsPeeringsResponse extends SpeakeasyBase {
    dnsPeerings?: DnsPeering[];
    nextPageToken?: string;
}
