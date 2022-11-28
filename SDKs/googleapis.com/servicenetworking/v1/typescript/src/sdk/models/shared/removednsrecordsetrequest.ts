import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";



// RemoveDnsRecordSetRequest
/** 
 * Request to remove a record set from a private managed DNS zone in the shared producer host project. The name, type, ttl, and data values must all exactly match an existing record set in the specified zone.
**/
export class RemoveDnsRecordSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsRecordSet" })
  dnsRecordSet?: DnsRecordSet;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
