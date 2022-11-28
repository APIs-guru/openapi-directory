import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthority } from "./certificateauthority";
/**
 * Response message for CertificateAuthorityService.ListCertificateAuthorities.
**/
export declare class ListCertificateAuthoritiesResponse extends SpeakeasyBase {
    certificateAuthorities?: CertificateAuthority[];
    nextPageToken?: string;
    unreachable?: string[];
}
