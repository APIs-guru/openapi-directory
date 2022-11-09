import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublicKeyCredentialFormatEnum {
    UnspecifiedPublicKeyFormat = "UNSPECIFIED_PUBLIC_KEY_FORMAT"
,    RsaPem = "RSA_PEM"
,    RsaX509Pem = "RSA_X509_PEM"
,    Es256Pem = "ES256_PEM"
,    Es256X509Pem = "ES256_X509_PEM"
}


// PublicKeyCredential
/** 
 * A public key format and data.
**/
export class PublicKeyCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: PublicKeyCredentialFormatEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;
}
