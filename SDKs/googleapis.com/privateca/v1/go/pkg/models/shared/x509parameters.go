package shared

// X509Parameters
// An X509Parameters is used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
type X509Parameters struct {
	AdditionalExtensions []X509Extension `json:"additionalExtensions,omitempty"`
	AiaOcspServers       []string        `json:"aiaOcspServers,omitempty"`
	CaOptions            *CaOptions      `json:"caOptions,omitempty"`
	KeyUsage             *KeyUsage       `json:"keyUsage,omitempty"`
	PolicyIds            []ObjectID      `json:"policyIds,omitempty"`
}
