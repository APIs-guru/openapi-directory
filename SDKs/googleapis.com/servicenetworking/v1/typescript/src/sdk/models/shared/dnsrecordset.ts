import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DnsRecordSet
/** 
 * Represents a DNS record set resource.
**/
export class DnsRecordSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string[];

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
