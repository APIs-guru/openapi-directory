import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.EnableCertificateAuthority.
**/
export class EnableCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
