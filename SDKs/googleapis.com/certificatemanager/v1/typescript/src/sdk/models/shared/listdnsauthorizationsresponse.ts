import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsAuthorization } from "./dnsauthorization";


// ListDnsAuthorizationsResponse
/** 
 * Response for the `ListDnsAuthorizations` method.
**/
export class ListDnsAuthorizationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsAuthorizations", elemType: shared.DnsAuthorization })
  dnsAuthorizations?: DnsAuthorization[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
