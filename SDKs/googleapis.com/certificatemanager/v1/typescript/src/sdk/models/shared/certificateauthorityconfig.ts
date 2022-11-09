import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateAuthorityServiceConfig } from "./certificateauthorityserviceconfig";


// CertificateAuthorityConfig
/** 
 * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
**/
export class CertificateAuthorityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthorityServiceConfig" })
  certificateAuthorityServiceConfig?: CertificateAuthorityServiceConfig;
}
