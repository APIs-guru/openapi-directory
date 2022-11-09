import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PublicKeyCredentialFormatEnum {
    UnspecifiedPublicKeyFormat = "UNSPECIFIED_PUBLIC_KEY_FORMAT",
    RsaPem = "RSA_PEM",
    RsaX509Pem = "RSA_X509_PEM",
    Es256Pem = "ES256_PEM",
    Es256X509Pem = "ES256_X509_PEM"
}
/**
 * A public key format and data.
**/
export declare class PublicKeyCredential extends SpeakeasyBase {
    format?: PublicKeyCredentialFormatEnum;
    key?: string;
}
