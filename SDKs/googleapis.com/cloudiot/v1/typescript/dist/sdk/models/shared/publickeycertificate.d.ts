import { SpeakeasyBase } from "../../../internal/utils";
import { X509CertificateDetails } from "./x509certificatedetails";
export declare enum PublicKeyCertificateFormatEnum {
    UnspecifiedPublicKeyCertificateFormat = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT",
    X509CertificatePem = "X509_CERTIFICATE_PEM"
}
/**
 * A public key certificate format and data.
**/
export declare class PublicKeyCertificate extends SpeakeasyBase {
    certificate?: string;
    format?: PublicKeyCertificateFormatEnum;
    x509Details?: X509CertificateDetails;
}
