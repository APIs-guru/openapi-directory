package shared




type ServiceAccountKeyKeyAlgorithmEnum string

const (
    ServiceAccountKeyKeyAlgorithmEnumKeyAlgUnspecified ServiceAccountKeyKeyAlgorithmEnum = "KEY_ALG_UNSPECIFIED"
ServiceAccountKeyKeyAlgorithmEnumKeyAlgRsa1024 ServiceAccountKeyKeyAlgorithmEnum = "KEY_ALG_RSA_1024"
ServiceAccountKeyKeyAlgorithmEnumKeyAlgRsa2048 ServiceAccountKeyKeyAlgorithmEnum = "KEY_ALG_RSA_2048"
)



type ServiceAccountKeyKeyOriginEnum string

const (
    ServiceAccountKeyKeyOriginEnumOriginUnspecified ServiceAccountKeyKeyOriginEnum = "ORIGIN_UNSPECIFIED"
ServiceAccountKeyKeyOriginEnumUserProvided ServiceAccountKeyKeyOriginEnum = "USER_PROVIDED"
ServiceAccountKeyKeyOriginEnumGoogleProvided ServiceAccountKeyKeyOriginEnum = "GOOGLE_PROVIDED"
)



type ServiceAccountKeyKeyTypeEnum string

const (
    ServiceAccountKeyKeyTypeEnumKeyTypeUnspecified ServiceAccountKeyKeyTypeEnum = "KEY_TYPE_UNSPECIFIED"
ServiceAccountKeyKeyTypeEnumUserManaged ServiceAccountKeyKeyTypeEnum = "USER_MANAGED"
ServiceAccountKeyKeyTypeEnumSystemManaged ServiceAccountKeyKeyTypeEnum = "SYSTEM_MANAGED"
)



type ServiceAccountKeyPrivateKeyTypeEnum string

const (
    ServiceAccountKeyPrivateKeyTypeEnumTypeUnspecified ServiceAccountKeyPrivateKeyTypeEnum = "TYPE_UNSPECIFIED"
ServiceAccountKeyPrivateKeyTypeEnumTypePkcs12File ServiceAccountKeyPrivateKeyTypeEnum = "TYPE_PKCS12_FILE"
ServiceAccountKeyPrivateKeyTypeEnumTypeGoogleCredentialsFile ServiceAccountKeyPrivateKeyTypeEnum = "TYPE_GOOGLE_CREDENTIALS_FILE"
)


type ServiceAccountKey struct {
    Disabled *bool `json:"disabled,omitempty"`
    KeyAlgorithm *ServiceAccountKeyKeyAlgorithmEnum `json:"keyAlgorithm,omitempty"`
    KeyOrigin *ServiceAccountKeyKeyOriginEnum `json:"keyOrigin,omitempty"`
    KeyType *ServiceAccountKeyKeyTypeEnum `json:"keyType,omitempty"`
    Name *string `json:"name,omitempty"`
    PrivateKeyData *string `json:"privateKeyData,omitempty"`
    PrivateKeyType *ServiceAccountKeyPrivateKeyTypeEnum `json:"privateKeyType,omitempty"`
    PublicKeyData *string `json:"publicKeyData,omitempty"`
    ValidAfterTime *string `json:"validAfterTime,omitempty"`
    ValidBeforeTime *string `json:"validBeforeTime,omitempty"`
    
}

