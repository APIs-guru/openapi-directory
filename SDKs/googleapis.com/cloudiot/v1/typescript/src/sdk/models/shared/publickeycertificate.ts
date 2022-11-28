import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { X509CertificateDetails } from "./x509certificatedetails";


export enum PublicKeyCertificateFormatEnum {
    UnspecifiedPublicKeyCertificateFormat = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
    X509CertificatePem = "X509_CERTIFICATE_PEM"
}


// PublicKeyCertificate
/** 
 * A public key certificate format and data.
**/
export class PublicKeyCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: PublicKeyCertificateFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=x509Details" })
  x509Details?: X509CertificateDetails;
}
