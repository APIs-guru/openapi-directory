import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertChain } from "./certchain";


// FetchCaCertsResponse
/** 
 * Response message for CertificateAuthorityService.FetchCaCerts.
**/
export class FetchCaCertsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=caCerts", elemType: shared.CertChain })
  caCerts?: CertChain[];
}
