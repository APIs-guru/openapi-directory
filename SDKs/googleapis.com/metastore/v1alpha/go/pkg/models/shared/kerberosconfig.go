package shared

// KerberosConfig
// Configuration information for a Kerberos principal.
type KerberosConfig struct {
	Keytab           *Secret `json:"keytab,omitempty"`
	Krb5ConfigGcsURI *string `json:"krb5ConfigGcsUri,omitempty"`
	Principal        *string `json:"principal,omitempty"`
}
