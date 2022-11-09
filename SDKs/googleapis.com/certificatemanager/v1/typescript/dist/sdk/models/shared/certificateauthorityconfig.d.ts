import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateAuthorityServiceConfig } from "./certificateauthorityserviceconfig";
/**
 * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
**/
export declare class CertificateAuthorityConfig extends SpeakeasyBase {
    certificateAuthorityServiceConfig?: CertificateAuthorityServiceConfig;
}
