import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateAuthorityServiceConfig
/** 
 * Contains information required to contact CA service.
**/
export class CertificateAuthorityServiceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caPool" })
  caPool?: string;
}
