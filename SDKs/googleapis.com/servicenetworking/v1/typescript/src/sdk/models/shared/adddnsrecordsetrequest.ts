import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordSet } from "./dnsrecordset";



// AddDnsRecordSetRequest
/** 
 * Request to add a record set to a private managed DNS zone in the shared producer host project.
**/
export class AddDnsRecordSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsRecordSet" })
  dnsRecordSet?: DnsRecordSet;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
