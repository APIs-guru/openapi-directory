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

type ServiceAccountKey struct {
	Disabled        *bool                                `json:"disabled"`
	KeyAlgorithm    *ServiceAccountKeyKeyAlgorithmEnum   `json:"keyAlgorithm"`
	KeyOrigin       *ServiceAccountKeyKeyOriginEnum      `json:"keyOrigin"`
	KeyType         *ServiceAccountKeyKeyTypeEnum        `json:"keyType"`
	Name            *string                              `json:"name"`
	PrivateKeyData  *string                              `json:"privateKeyData"`
	PrivateKeyType  *ServiceAccountKeyPrivateKeyTypeEnum `json:"privateKeyType"`
	PublicKeyData   *string                              `json:"publicKeyData"`
	ValidAfterTime  *string                              `json:"validAfterTime"`
	ValidBeforeTime *string                              `json:"validBeforeTime"`
}
