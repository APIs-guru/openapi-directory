import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsRecordSet } from "./dnsrecordset";


// RemoveDnsRecordSetRequest
/** 
 * Request to remove a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values must all exactly match an existing record set in the specified zone.
**/
export class RemoveDnsRecordSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=dnsRecordSet" })
  dnsRecordSet?: DnsRecordSet;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
