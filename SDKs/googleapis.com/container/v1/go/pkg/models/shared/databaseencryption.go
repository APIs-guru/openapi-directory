package shared

type DatabaseEncryptionStateEnum string

const (
	DatabaseEncryptionStateEnumUnknown   DatabaseEncryptionStateEnum = "UNKNOWN"
	DatabaseEncryptionStateEnumEncrypted DatabaseEncryptionStateEnum = "ENCRYPTED"
	DatabaseEncryptionStateEnumDecrypted DatabaseEncryptionStateEnum = "DECRYPTED"
)

type DatabaseEncryption struct {
	KeyName *string                      `json:"keyName,omitempty"`
	State   *DatabaseEncryptionStateEnum `json:"state,omitempty"`
}
