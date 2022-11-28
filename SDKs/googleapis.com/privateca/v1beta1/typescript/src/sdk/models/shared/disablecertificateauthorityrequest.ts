import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.DisableCertificateAuthority.
**/
export class DisableCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
