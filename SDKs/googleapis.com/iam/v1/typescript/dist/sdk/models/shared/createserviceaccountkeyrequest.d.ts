import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CreateServiceAccountKeyRequestKeyAlgorithmEnum {
    KeyAlgUnspecified = "KEY_ALG_UNSPECIFIED",
    KeyAlgRsa1024 = "KEY_ALG_RSA_1024",
    KeyAlgRsa2048 = "KEY_ALG_RSA_2048"
}
export declare enum CreateServiceAccountKeyRequestPrivateKeyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePkcs12File = "TYPE_PKCS12_FILE",
    TypeGoogleCredentialsFile = "TYPE_GOOGLE_CREDENTIALS_FILE"
}
/**
 * The service account key create request.
**/
export declare class CreateServiceAccountKeyRequest extends SpeakeasyBase {
    keyAlgorithm?: CreateServiceAccountKeyRequestKeyAlgorithmEnum;
    privateKeyType?: CreateServiceAccountKeyRequestPrivateKeyTypeEnum;
}
