import { SpeakeasyBase } from "../../../internal/utils";
import { PeeredDnsDomain } from "./peereddnsdomain";
/**
 * Response to list peered DNS domains for a given connection.
**/
export declare class ListPeeredDnsDomainsResponse extends SpeakeasyBase {
    peeredDnsDomains?: PeeredDnsDomain[];
}
