package shared

type KeyPair struct {
	PrimaryKey   *string `json:"PrimaryKey,omitempty"`
	SecondaryKey *string `json:"SecondaryKey,omitempty"`
}
