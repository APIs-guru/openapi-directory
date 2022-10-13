package shared

type KerberosConfig struct {
	Keytab           *Secret `json:"keytab"`
	Krb5ConfigGcsURI *string `json:"krb5ConfigGcsUri"`
	Principal        *string `json:"principal"`
}
