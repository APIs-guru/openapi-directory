import { SpeakeasyBase } from "../../../internal/utils";
import { DnsAuthorization } from "./dnsauthorization";
/**
 * Response for the `ListDnsAuthorizations` method.
**/
export declare class ListDnsAuthorizationsResponse extends SpeakeasyBase {
    dnsAuthorizations?: DnsAuthorization[];
    nextPageToken?: string;
    unreachable?: string[];
}
