import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CertificateAuthority } from "./certificateauthority";


// ListCertificateAuthoritiesResponse
/** 
 * Response message for CertificateAuthorityService.ListCertificateAuthorities.
**/
export class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateAuthorities", elemType: shared.CertificateAuthority })
  certificateAuthorities?: CertificateAuthority[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
