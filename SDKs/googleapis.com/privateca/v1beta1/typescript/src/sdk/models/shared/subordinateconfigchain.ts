import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubordinateConfigChain
/** 
 * This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
**/
export class SubordinateConfigChain extends SpeakeasyBase {
  @Metadata({ data: "json, name=pemCertificates" })
  pemCertificates?: string[];
}
