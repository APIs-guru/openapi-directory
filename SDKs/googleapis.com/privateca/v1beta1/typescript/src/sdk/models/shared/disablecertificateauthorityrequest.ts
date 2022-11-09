import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.DisableCertificateAuthority.
**/
export class DisableCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
