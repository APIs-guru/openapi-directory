import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityServiceConfig } from "./certificateauthorityserviceconfig";



// CertificateAuthorityConfig
/** 
 * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
**/
export class CertificateAuthorityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorityServiceConfig" })
  certificateAuthorityServiceConfig?: CertificateAuthorityServiceConfig;
}
