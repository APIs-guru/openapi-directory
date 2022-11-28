package shared

type ServiceAccountKeyKeyAlgorithmEnum string

const (
	ServiceAccountKeyKeyAlgorithmEnumKeyAlgUnspecified ServiceAccountKeyKeyAlgorithmEnum = "KEY_ALG_UNSPECIFIED"
	ServiceAccountKeyKeyAlgorithmEnumKeyAlgRsa1024     ServiceAccountKeyKeyAlgorithmEnum = "KEY_ALG_RSA_1024"
	ServiceAccountKeyKeyAlgorithmEnumKeyAlgRsa2048     ServiceAccountKeyKeyAlgorithmEnum = "KEY_ALG_RSA_2048"
)

type ServiceAccountKeyKeyOriginEnum string

const (
	ServiceAccountKeyKeyOriginEnumOriginUnspecified ServiceAccountKeyKeyOriginEnum = "ORIGIN_UNSPECIFIED"
	ServiceAccountKeyKeyOriginEnumUserProvided      ServiceAccountKeyKeyOriginEnum = "USER_PROVIDED"
	ServiceAccountKeyKeyOriginEnumGoogleProvided    ServiceAccountKeyKeyOriginEnum = "GOOGLE_PROVIDED"
)

type ServiceAccountKeyKeyTypeEnum string

const (
	ServiceAccountKeyKeyTypeEnumKeyTypeUnspecified ServiceAccountKeyKeyTypeEnum = "KEY_TYPE_UNSPECIFIED"
	ServiceAccountKeyKeyTypeEnumUserManaged        ServiceAccountKeyKeyTypeEnum = "USER_MANAGED"
	ServiceAccountKeyKeyTypeEnumSystemManaged      ServiceAccountKeyKeyTypeEnum = "SYSTEM_MANAGED"
)

type ServiceAccountKeyPrivateKeyTypeEnum string

const (
	ServiceAccountKeyPrivateKeyTypeEnumTypeUnspecified           ServiceAccountKeyPrivateKeyTypeEnum = "TYPE_UNSPECIFIED"
	ServiceAccountKeyPrivateKeyTypeEnumTypePkcs12File            ServiceAccountKeyPrivateKeyTypeEnum = "TYPE_PKCS12_FILE"
	ServiceAccountKeyPrivateKeyTypeEnumTypeGoogleCredentialsFile ServiceAccountKeyPrivateKeyTypeEnum = "TYPE_GOOGLE_CREDENTIALS_FILE"
)

// ServiceAccountKey
// Represents a service account key. A service account has two sets of key-pairs: user-managed, and system-managed. User-managed key-pairs can be created and deleted by users. Users are responsible for rotating these keys periodically to ensure security of their service accounts. Users retain the private key of these key-pairs, and Google retains ONLY the public key. System-managed keys are automatically rotated by Google, and are used for signing for a maximum of two weeks. The rotation process is probabilistic, and usage of the new key will gradually ramp up and down over the key's lifetime. If you cache the public key set for a service account, we recommend that you update the cache every 15 minutes. User-managed keys can be added and removed at any time, so it is important to update the cache frequently. For Google-managed keys, Google will publish a key at least 6 hours before it is first used for signing and will keep publishing it for at least 6 hours after it was last used for signing. Public keys for all service accounts are also published at the OAuth2 Service Account API.
type ServiceAccountKey struct {
	Disabled        *bool                                `json:"disabled,omitempty"`
	KeyAlgorithm    *ServiceAccountKeyKeyAlgorithmEnum   `json:"keyAlgorithm,omitempty"`
	KeyOrigin       *ServiceAccountKeyKeyOriginEnum      `json:"keyOrigin,omitempty"`
	KeyType         *ServiceAccountKeyKeyTypeEnum        `json:"keyType,omitempty"`
	Name            *string                              `json:"name,omitempty"`
	PrivateKeyData  *string                              `json:"privateKeyData,omitempty"`
	PrivateKeyType  *ServiceAccountKeyPrivateKeyTypeEnum `json:"privateKeyType,omitempty"`
	PublicKeyData   *string                              `json:"publicKeyData,omitempty"`
	ValidAfterTime  *string                              `json:"validAfterTime,omitempty"`
	ValidBeforeTime *string                              `json:"validBeforeTime,omitempty"`
}
