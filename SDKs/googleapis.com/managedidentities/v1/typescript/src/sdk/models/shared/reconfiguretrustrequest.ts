import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReconfigureTrustRequest
/** 
 * Request message for ReconfigureTrust
**/
export class ReconfigureTrustRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=targetDnsIpAddresses" })
  targetDnsIpAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetDomainName" })
  targetDomainName?: string;
}
