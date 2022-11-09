import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsResourceRecord } from "./dnsresourcerecord";


// DnsAuthorization
/** 
 * A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
**/
export class DnsAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dnsResourceRecord" })
  dnsResourceRecord?: DnsResourceRecord;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
