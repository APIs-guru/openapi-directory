import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKey } from "./dnskey";
import { ResponseHeader } from "./responseheader";



// DnsKeysListResponse
/** 
 * The response to a request to enumerate DnsKeys in a ManagedZone.
**/
export class DnsKeysListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsKeys", elemType: DnsKey })
  dnsKeys?: DnsKey[];

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
