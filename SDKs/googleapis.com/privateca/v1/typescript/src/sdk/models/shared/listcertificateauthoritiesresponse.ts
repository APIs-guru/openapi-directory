import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthority } from "./certificateauthority";



// ListCertificateAuthoritiesResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificateAuthorities.
**/
export class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateAuthorities", elemType: CertificateAuthority })
  certificateAuthorities?: CertificateAuthority[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
