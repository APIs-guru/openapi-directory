import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReconfigureTrustRequest
/** 
 * Request message for ReconfigureTrust
**/
export class ReconfigureTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=targetDnsIpAddresses" })
  targetDnsIpAddresses?: string[];

  @Metadata({ data: "json, name=targetDomainName" })
  targetDomainName?: string;
}
