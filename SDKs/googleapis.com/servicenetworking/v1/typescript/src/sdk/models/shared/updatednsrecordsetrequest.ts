import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";



// UpdateDnsRecordSetRequest
/** 
 * Request to update a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values of the existing record set must all exactly match an existing record set in the specified zone.
**/
export class UpdateDnsRecordSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=existingDnsRecordSet" })
  existingDnsRecordSet?: DnsRecordSet;

  @SpeakeasyMetadata({ data: "json, name=newDnsRecordSet" })
  newDnsRecordSet?: DnsRecordSet;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
