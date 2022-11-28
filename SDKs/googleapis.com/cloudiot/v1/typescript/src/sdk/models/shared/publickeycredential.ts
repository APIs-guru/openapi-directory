import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PublicKeyCredentialFormatEnum {
    UnspecifiedPublicKeyFormat = "UNSPECIFIED_PUBLIC_KEY_FORMAT",
    RsaPem = "RSA_PEM",
    RsaX509Pem = "RSA_X509_PEM",
    Es256Pem = "ES256_PEM",
    Es256X509Pem = "ES256_X509_PEM"
}


// PublicKeyCredential
/** 
 * A public key format and data.
**/
export class PublicKeyCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: PublicKeyCredentialFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
