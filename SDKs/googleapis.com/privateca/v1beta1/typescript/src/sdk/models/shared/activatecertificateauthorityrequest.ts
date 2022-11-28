import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubordinateConfig } from "./subordinateconfig";



// ActivateCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.ActivateCertificateAuthority.
**/
export class ActivateCertificateAuthorityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pemCaCertificate" })
  pemCaCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=subordinateConfig" })
  subordinateConfig?: SubordinateConfig;
}
