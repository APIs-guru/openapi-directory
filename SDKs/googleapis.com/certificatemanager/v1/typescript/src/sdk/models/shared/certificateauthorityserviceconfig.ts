import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateAuthorityServiceConfig
/** 
 * Contains information required to contact CA service.
**/
export class CertificateAuthorityServiceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=caPool" })
  caPool?: string;
}
