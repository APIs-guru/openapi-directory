import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsKey } from "./dnskey";
import { ResponseHeader } from "./responseheader";


// DnsKeysListResponse
/** 
 * The response to a request to enumerate DnsKeys in a ManagedZone.
**/
export class DnsKeysListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsKeys", elemType: shared.DnsKey })
  dnsKeys?: DnsKey[];

  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
