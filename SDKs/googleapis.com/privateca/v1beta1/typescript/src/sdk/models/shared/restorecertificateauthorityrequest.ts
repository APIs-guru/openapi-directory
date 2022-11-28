import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.RestoreCertificateAuthority.
**/
export class RestoreCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
