import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKey } from "./dnskey";
import { ResponseHeader } from "./responseheader";
/**
 * The response to a request to enumerate DnsKeys in a ManagedZone.
**/
export declare class DnsKeysListResponse extends SpeakeasyBase {
    dnsKeys?: DnsKey[];
    header?: ResponseHeader;
    kind?: string;
    nextPageToken?: string;
}
