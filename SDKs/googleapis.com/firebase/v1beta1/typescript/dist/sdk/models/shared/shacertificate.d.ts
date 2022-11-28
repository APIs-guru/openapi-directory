import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ShaCertificateCertTypeEnum {
    ShaCertificateTypeUnspecified = "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
    Sha1 = "SHA_1",
    Sha256 = "SHA_256"
}
/**
 * A SHA-1 or SHA-256 certificate associated with the AndroidApp.
**/
export declare class ShaCertificate extends SpeakeasyBase {
    certType?: ShaCertificateCertTypeEnum;
    name?: string;
    shaHash?: string;
}
