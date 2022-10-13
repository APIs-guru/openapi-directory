package shared

type ReusableConfigValues struct {
	AdditionalExtensions []X509Extension `json:"additionalExtensions"`
	AiaOcspServers       []string        `json:"aiaOcspServers"`
	CaOptions            *CaOptions      `json:"caOptions"`
	KeyUsage             *KeyUsage       `json:"keyUsage"`
	PolicyIds            []ObjectID      `json:"policyIds"`
}
