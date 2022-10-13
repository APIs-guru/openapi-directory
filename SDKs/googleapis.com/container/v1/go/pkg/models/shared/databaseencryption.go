package shared

type DatabaseEncryptionStateEnum string

const (
	DatabaseEncryptionStateEnumUnknown   DatabaseEncryptionStateEnum = "UNKNOWN"
	DatabaseEncryptionStateEnumEncrypted DatabaseEncryptionStateEnum = "ENCRYPTED"
	DatabaseEncryptionStateEnumDecrypted DatabaseEncryptionStateEnum = "DECRYPTED"
)

type DatabaseEncryption struct {
	KeyName *string                      `json:"keyName"`
	State   *DatabaseEncryptionStateEnum `json:"state"`
}
