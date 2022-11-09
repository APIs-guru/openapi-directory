import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AllowedSubjectAltNames
/** 
 * AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
**/
export class AllowedSubjectAltNames extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowCustomSans" })
  allowCustomSans?: boolean;

  @Metadata({ data: "json, name=allowGlobbingDnsWildcards" })
  allowGlobbingDnsWildcards?: boolean;

  @Metadata({ data: "json, name=allowedDnsNames" })
  allowedDnsNames?: string[];

  @Metadata({ data: "json, name=allowedEmailAddresses" })
  allowedEmailAddresses?: string[];

  @Metadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @Metadata({ data: "json, name=allowedUris" })
  allowedUris?: string[];
}
