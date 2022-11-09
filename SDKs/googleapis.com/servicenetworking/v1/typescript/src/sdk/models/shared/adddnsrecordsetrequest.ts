import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsRecordSet } from "./dnsrecordset";


// AddDnsRecordSetRequest
/** 
 * Request to add a record set to a private managed DNS zone in the shared producer host project.
**/
export class AddDnsRecordSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=dnsRecordSet" })
  dnsRecordSet?: DnsRecordSet;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
