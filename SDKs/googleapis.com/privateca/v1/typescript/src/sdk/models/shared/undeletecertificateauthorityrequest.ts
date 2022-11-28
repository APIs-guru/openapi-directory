import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UndeleteCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.UndeleteCertificateAuthority.
**/
export class UndeleteCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
