package shared

type EncryptionInfoEncryptionEntityTypeEnum string

const (
	EncryptionInfoEncryptionEntityTypeEnumEncryptionEntityTypeUnknown EncryptionInfoEncryptionEntityTypeEnum = "ENCRYPTION_ENTITY_TYPE_UNKNOWN"
	EncryptionInfoEncryptionEntityTypeEnumDcmAccount                  EncryptionInfoEncryptionEntityTypeEnum = "DCM_ACCOUNT"
	EncryptionInfoEncryptionEntityTypeEnumDcmAdvertiser               EncryptionInfoEncryptionEntityTypeEnum = "DCM_ADVERTISER"
	EncryptionInfoEncryptionEntityTypeEnumDbmPartner                  EncryptionInfoEncryptionEntityTypeEnum = "DBM_PARTNER"
	EncryptionInfoEncryptionEntityTypeEnumDbmAdvertiser               EncryptionInfoEncryptionEntityTypeEnum = "DBM_ADVERTISER"
	EncryptionInfoEncryptionEntityTypeEnumAdwordsCustomer             EncryptionInfoEncryptionEntityTypeEnum = "ADWORDS_CUSTOMER"
	EncryptionInfoEncryptionEntityTypeEnumDfpNetworkCode              EncryptionInfoEncryptionEntityTypeEnum = "DFP_NETWORK_CODE"
)

type EncryptionInfoEncryptionSourceEnum string

const (
	EncryptionInfoEncryptionSourceEnumEncryptionScopeUnknown EncryptionInfoEncryptionSourceEnum = "ENCRYPTION_SCOPE_UNKNOWN"
	EncryptionInfoEncryptionSourceEnumAdServing              EncryptionInfoEncryptionSourceEnum = "AD_SERVING"
	EncryptionInfoEncryptionSourceEnumDataTransfer           EncryptionInfoEncryptionSourceEnum = "DATA_TRANSFER"
)

type EncryptionInfo struct {
	EncryptionEntityID   *string                                 `json:"encryptionEntityId"`
	EncryptionEntityType *EncryptionInfoEncryptionEntityTypeEnum `json:"encryptionEntityType"`
	EncryptionSource     *EncryptionInfoEncryptionSourceEnum     `json:"encryptionSource"`
	Kind                 *string                                 `json:"kind"`
}
