import { SpeakeasyBase } from "../../../internal/utils";
import { SubordinateConfig } from "./subordinateconfig";
/**
 * Request message for CertificateAuthorityService.ActivateCertificateAuthority.
**/
export declare class ActivateCertificateAuthorityRequest extends SpeakeasyBase {
    pemCaCertificate?: string;
    requestId?: string;
    subordinateConfig?: SubordinateConfig;
}
