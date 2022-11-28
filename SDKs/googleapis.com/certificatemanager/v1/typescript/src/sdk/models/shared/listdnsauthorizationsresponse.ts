import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsAuthorization } from "./dnsauthorization";



// ListDnsAuthorizationsResponse
/** 
 * Response for the `ListDnsAuthorizations` method.
**/
export class ListDnsAuthorizationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsAuthorizations", elemType: DnsAuthorization })
  dnsAuthorizations?: DnsAuthorization[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
