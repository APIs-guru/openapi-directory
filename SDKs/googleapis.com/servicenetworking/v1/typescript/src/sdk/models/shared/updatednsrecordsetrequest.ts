import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsRecordSet } from "./dnsrecordset";
import { DnsRecordSet } from "./dnsrecordset";


// UpdateDnsRecordSetRequest
/** 
 * Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.
**/
export class UpdateDnsRecordSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=existingDnsRecordSet" })
  existingDnsRecordSet?: DnsRecordSet;

  @Metadata({ data: "json, name=newDnsRecordSet" })
  newDnsRecordSet?: DnsRecordSet;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
