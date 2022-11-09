import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateServiceAccountKeyRequestKeyAlgorithmEnum {
    KeyAlgUnspecified = "KEY_ALG_UNSPECIFIED"
,    KeyAlgRsa1024 = "KEY_ALG_RSA_1024"
,    KeyAlgRsa2048 = "KEY_ALG_RSA_2048"
}

export enum CreateServiceAccountKeyRequestPrivateKeyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    TypePkcs12File = "TYPE_PKCS12_FILE"
,    TypeGoogleCredentialsFile = "TYPE_GOOGLE_CREDENTIALS_FILE"
}


// CreateServiceAccountKeyRequest
/** 
 * The service account key create request.
**/
export class CreateServiceAccountKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyAlgorithm" })
  keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithmEnum;

  @Metadata({ data: "json, name=privateKeyType" })
  privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyTypeEnum;
}
