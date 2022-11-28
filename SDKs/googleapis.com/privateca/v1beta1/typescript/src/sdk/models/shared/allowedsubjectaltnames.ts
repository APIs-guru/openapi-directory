import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllowedSubjectAltNames
/** 
 * AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
**/
export class AllowedSubjectAltNames extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowCustomSans" })
  allowCustomSans?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowGlobbingDnsWildcards" })
  allowGlobbingDnsWildcards?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowedDnsNames" })
  allowedDnsNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowedEmailAddresses" })
  allowedEmailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=allowedUris" })
  allowedUris?: string[];
}
