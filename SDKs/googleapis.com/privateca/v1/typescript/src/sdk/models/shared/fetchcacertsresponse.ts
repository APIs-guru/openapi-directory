import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertChain } from "./certchain";



// FetchCaCertsResponse
/** 
 * Response message for CertificateAuthorityService.FetchCaCerts.
**/
export class FetchCaCertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caCerts", elemType: CertChain })
  caCerts?: CertChain[];
}
