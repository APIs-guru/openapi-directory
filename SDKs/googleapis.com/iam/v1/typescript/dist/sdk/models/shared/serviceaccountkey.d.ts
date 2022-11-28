import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ServiceAccountKeyKeyAlgorithmEnum {
    KeyAlgUnspecified = "KEY_ALG_UNSPECIFIED",
    KeyAlgRsa1024 = "KEY_ALG_RSA_1024",
    KeyAlgRsa2048 = "KEY_ALG_RSA_2048"
}
export declare enum ServiceAccountKeyKeyOriginEnum {
    OriginUnspecified = "ORIGIN_UNSPECIFIED",
    UserProvided = "USER_PROVIDED",
    GoogleProvided = "GOOGLE_PROVIDED"
}
export declare enum ServiceAccountKeyKeyTypeEnum {
    KeyTypeUnspecified = "KEY_TYPE_UNSPECIFIED",
    UserManaged = "USER_MANAGED",
    SystemManaged = "SYSTEM_MANAGED"
}
export declare enum ServiceAccountKeyPrivateKeyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePkcs12File = "TYPE_PKCS12_FILE",
    TypeGoogleCredentialsFile = "TYPE_GOOGLE_CREDENTIALS_FILE"
}
/**
 * Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.
**/
export declare class ServiceAccountKey extends SpeakeasyBase {
    disabled?: boolean;
    keyAlgorithm?: ServiceAccountKeyKeyAlgorithmEnum;
    keyOrigin?: ServiceAccountKeyKeyOriginEnum;
    keyType?: ServiceAccountKeyKeyTypeEnum;
    name?: string;
    privateKeyData?: string;
    privateKeyType?: ServiceAccountKeyPrivateKeyTypeEnum;
    publicKeyData?: string;
    validAfterTime?: string;
    validBeforeTime?: string;
}
