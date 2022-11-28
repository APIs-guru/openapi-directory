package shared

// KerberosConfig
// Specifies Kerberos related configuration.
type KerberosConfig struct {
	CrossRealmTrustAdminServer       *string `json:"crossRealmTrustAdminServer,omitempty"`
	CrossRealmTrustKdc               *string `json:"crossRealmTrustKdc,omitempty"`
	CrossRealmTrustRealm             *string `json:"crossRealmTrustRealm,omitempty"`
	CrossRealmTrustSharedPasswordURI *string `json:"crossRealmTrustSharedPasswordUri,omitempty"`
	EnableKerberos                   *bool   `json:"enableKerberos,omitempty"`
	KdcDbKeyURI                      *string `json:"kdcDbKeyUri,omitempty"`
	KeyPasswordURI                   *string `json:"keyPasswordUri,omitempty"`
	KeystorePasswordURI              *string `json:"keystorePasswordUri,omitempty"`
	KeystoreURI                      *string `json:"keystoreUri,omitempty"`
	KmsKeyURI                        *string `json:"kmsKeyUri,omitempty"`
	Realm                            *string `json:"realm,omitempty"`
	RootPrincipalPasswordURI         *string `json:"rootPrincipalPasswordUri,omitempty"`
	TgtLifetimeHours                 *int32  `json:"tgtLifetimeHours,omitempty"`
	TruststorePasswordURI            *string `json:"truststorePasswordUri,omitempty"`
	TruststoreURI                    *string `json:"truststoreUri,omitempty"`
}
