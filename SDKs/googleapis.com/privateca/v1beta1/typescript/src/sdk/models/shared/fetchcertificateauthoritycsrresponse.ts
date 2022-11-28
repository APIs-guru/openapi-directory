import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FetchCertificateAuthorityCsrResponse
/** 
 * Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
**/
export class FetchCertificateAuthorityCsrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pemCsr" })
  pemCsr?: string;
}
