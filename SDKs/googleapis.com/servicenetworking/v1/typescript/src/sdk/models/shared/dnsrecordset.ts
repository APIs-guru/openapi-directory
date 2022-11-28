import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DnsRecordSet
/** 
 * Represents a DNS record set resource.
**/
export class DnsRecordSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string[];

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
