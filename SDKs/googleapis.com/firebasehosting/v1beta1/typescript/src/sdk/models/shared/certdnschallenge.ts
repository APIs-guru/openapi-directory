import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertDnsChallenge
/** 
 * Represents a DNS certificate challenge.
**/
export class CertDnsChallenge extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
