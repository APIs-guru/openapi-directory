import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertDnsChallenge
/** 
 * Represents a DNS certificate challenge.
**/
export class CertDnsChallenge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
