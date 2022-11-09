import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { X509CertificateDetails } from "./x509certificatedetails";

export enum PublicKeyCertificateFormatEnum {
    UnspecifiedPublicKeyCertificateFormat = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"
,    X509CertificatePem = "X509_CERTIFICATE_PEM"
}


// PublicKeyCertificate
/** 
 * A public key certificate format and data.
**/
export class PublicKeyCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=format" })
  format?: PublicKeyCertificateFormatEnum;

  @Metadata({ data: "json, name=x509Details" })
  x509Details?: X509CertificateDetails;
}
