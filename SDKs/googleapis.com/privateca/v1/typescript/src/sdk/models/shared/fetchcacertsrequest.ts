import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FetchCaCertsRequest
/** 
 * Request message for CertificateAuthorityService.FetchCaCerts.
**/
export class FetchCaCertsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
