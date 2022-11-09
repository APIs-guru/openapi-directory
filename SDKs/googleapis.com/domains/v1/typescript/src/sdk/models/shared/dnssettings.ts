import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomDns } from "./customdns";
import { GlueRecord } from "./gluerecord";
import { GoogleDomainsDns } from "./googledomainsdns";


// DnsSettings
/** 
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
export class DnsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=customDns" })
  customDns?: CustomDns;

  @Metadata({ data: "json, name=glueRecords", elemType: shared.GlueRecord })
  glueRecords?: GlueRecord[];

  @Metadata({ data: "json, name=googleDomainsDns" })
  googleDomainsDns?: GoogleDomainsDns;
}
