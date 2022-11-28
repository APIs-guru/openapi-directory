import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDns } from "./customdns";
import { GlueRecord } from "./gluerecord";
import { GoogleDomainsDns } from "./googledomainsdns";
import { GoogleDomainsDnsInput } from "./googledomainsdns";
/**
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
export declare class DnsSettings extends SpeakeasyBase {
    customDns?: CustomDns;
    glueRecords?: GlueRecord[];
    googleDomainsDns?: GoogleDomainsDns;
}
/**
 * Defines the DNS configuration of a `Registration`, including name servers, DNSSEC, and glue records.
**/
export declare class DnsSettingsInput extends SpeakeasyBase {
    customDns?: CustomDns;
    glueRecords?: GlueRecord[];
    googleDomainsDns?: GoogleDomainsDnsInput;
}
