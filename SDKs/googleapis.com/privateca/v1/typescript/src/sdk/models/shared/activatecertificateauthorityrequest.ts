import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubordinateConfig } from "./subordinateconfig";


// ActivateCertificateAuthorityRequest
/** 
 * Request message for CertificateAuthorityService.ActivateCertificateAuthority.
**/
export class ActivateCertificateAuthorityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pemCaCertificate" })
  pemCaCertificate?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=subordinateConfig" })
  subordinateConfig?: SubordinateConfig;
}
