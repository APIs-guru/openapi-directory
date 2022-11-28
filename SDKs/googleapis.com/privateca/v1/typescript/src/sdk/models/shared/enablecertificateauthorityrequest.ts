import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.EnableCertificateAuthority.
**/
export class EnableCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
