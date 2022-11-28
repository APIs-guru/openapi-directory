import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomDns } from "./customdns";
import { GlueRecord } from "./gluerecord";
import { GoogleDomainsDns } from "./googledomainsdns";
import { GoogleDomainsDnsInput } from "./googledomainsdns";



// DnsSettings
/** 
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
export class DnsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDns" })
  customDns?: CustomDns;

  @SpeakeasyMetadata({ data: "json, name=glueRecords", elemType: GlueRecord })
  glueRecords?: GlueRecord[];

  @SpeakeasyMetadata({ data: "json, name=googleDomainsDns" })
  googleDomainsDns?: GoogleDomainsDns;
}


// DnsSettingsInput
/** 
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
export class DnsSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDns" })
  customDns?: CustomDns;

  @SpeakeasyMetadata({ data: "json, name=glueRecords", elemType: GlueRecord })
  glueRecords?: GlueRecord[];

  @SpeakeasyMetadata({ data: "json, name=googleDomainsDns" })
  googleDomainsDns?: GoogleDomainsDnsInput;
}
