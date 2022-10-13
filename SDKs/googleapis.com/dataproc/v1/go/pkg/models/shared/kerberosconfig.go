package shared

type KerberosConfig struct {
	CrossRealmTrustAdminServer       *string `json:"crossRealmTrustAdminServer"`
	CrossRealmTrustKdc               *string `json:"crossRealmTrustKdc"`
	CrossRealmTrustRealm             *string `json:"crossRealmTrustRealm"`
	CrossRealmTrustSharedPasswordURI *string `json:"crossRealmTrustSharedPasswordUri"`
	EnableKerberos                   *bool   `json:"enableKerberos"`
	KdcDbKeyURI                      *string `json:"kdcDbKeyUri"`
	KeyPasswordURI                   *string `json:"keyPasswordUri"`
	KeystorePasswordURI              *string `json:"keystorePasswordUri"`
	KeystoreURI                      *string `json:"keystoreUri"`
	KmsKeyURI                        *string `json:"kmsKeyUri"`
	Realm                            *string `json:"realm"`
	RootPrincipalPasswordURI         *string `json:"rootPrincipalPasswordUri"`
	TgtLifetimeHours                 *int32  `json:"tgtLifetimeHours"`
	TruststorePasswordURI            *string `json:"truststorePasswordUri"`
	TruststoreURI                    *string `json:"truststoreUri"`
}
