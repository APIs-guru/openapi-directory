import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubordinateConfigChain
/** 
 * This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
**/
export class SubordinateConfigChain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pemCertificates" })
  pemCertificates?: string[];
}
