import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
**/
export declare class AllowedSubjectAltNames extends SpeakeasyBase {
    allowCustomSans?: boolean;
    allowGlobbingDnsWildcards?: boolean;
    allowedDnsNames?: string[];
    allowedEmailAddresses?: string[];
    allowedIps?: string[];
    allowedUris?: string[];
}
