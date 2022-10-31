package shared

type X509Parameters struct {
	AdditionalExtensions []X509Extension `json:"additionalExtensions,omitempty"`
	AiaOcspServers       []string        `json:"aiaOcspServers,omitempty"`
	CaOptions            *CaOptions      `json:"caOptions,omitempty"`
	KeyUsage             *KeyUsage       `json:"keyUsage,omitempty"`
	PolicyIds            []ObjectID      `json:"policyIds,omitempty"`
}
