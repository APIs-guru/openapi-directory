import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FetchCertificateAuthorityCsrResponse
/** 
 * Response message for CertificateAuthorityService.FetchCertificateAuthorityCsr.
**/
export class FetchCertificateAuthorityCsrResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pemCsr" })
  pemCsr?: string;
}
