import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateServiceAccountKeyRequestKeyAlgorithmEnum {
    KeyAlgUnspecified = "KEY_ALG_UNSPECIFIED",
    KeyAlgRsa1024 = "KEY_ALG_RSA_1024",
    KeyAlgRsa2048 = "KEY_ALG_RSA_2048"
}

export enum CreateServiceAccountKeyRequestPrivateKeyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePkcs12File = "TYPE_PKCS12_FILE",
    TypeGoogleCredentialsFile = "TYPE_GOOGLE_CREDENTIALS_FILE"
}


// CreateServiceAccountKeyRequest
/** 
 * The service account key create request.
**/
export class CreateServiceAccountKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithmEnum;

  @SpeakeasyMetadata({ data: "json, name=privateKeyType" })
  privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyTypeEnum;
}
