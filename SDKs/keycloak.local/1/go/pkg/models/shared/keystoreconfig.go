package shared

type KeyStoreConfig struct {
	Format           *string `json:"format"`
	KeyAlias         *string `json:"keyAlias"`
	KeyPassword      *string `json:"keyPassword"`
	RealmAlias       *string `json:"realmAlias"`
	RealmCertificate *bool   `json:"realmCertificate"`
	StorePassword    *string `json:"storePassword"`
}
