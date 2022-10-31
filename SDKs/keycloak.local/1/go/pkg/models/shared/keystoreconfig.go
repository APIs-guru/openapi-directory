package shared

type KeyStoreConfig struct {
	Format           *string `json:"format,omitempty"`
	KeyAlias         *string `json:"keyAlias,omitempty"`
	KeyPassword      *string `json:"keyPassword,omitempty"`
	RealmAlias       *string `json:"realmAlias,omitempty"`
	RealmCertificate *bool   `json:"realmCertificate,omitempty"`
	StorePassword    *string `json:"storePassword,omitempty"`
}
