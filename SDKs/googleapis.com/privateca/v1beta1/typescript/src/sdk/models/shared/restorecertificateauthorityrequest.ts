import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.RestoreCertificateAuthority.
**/
export class RestoreCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
