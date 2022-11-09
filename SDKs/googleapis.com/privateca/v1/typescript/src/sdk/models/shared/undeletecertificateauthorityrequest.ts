import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UndeleteCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.UndeleteCertificateAuthority.
**/
export class UndeleteCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
