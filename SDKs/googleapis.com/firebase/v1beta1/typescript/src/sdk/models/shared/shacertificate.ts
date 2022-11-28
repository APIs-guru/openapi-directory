import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ShaCertificateCertTypeEnum {
    ShaCertificateTypeUnspecified = "SHA_CERTIFICATE_TYPE_UNSPECIFIED",
    Sha1 = "SHA_1",
    Sha256 = "SHA_256"
}


// ShaCertificate
/** 
 * A SHA-1 or SHA-256 certificate associated with the AndroidApp.
**/
export class ShaCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certType" })
  certType?: ShaCertificateCertTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=shaHash" })
  shaHash?: string;
}
