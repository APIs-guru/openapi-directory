package shared

type MySQLReplicaConfiguration struct {
	CaCertificate           *string `json:"caCertificate"`
	ClientCertificate       *string `json:"clientCertificate"`
	ClientKey               *string `json:"clientKey"`
	ConnectRetryInterval    *int32  `json:"connectRetryInterval"`
	DumpFilePath            *string `json:"dumpFilePath"`
	Kind                    *string `json:"kind"`
	MasterHeartbeatPeriod   *string `json:"masterHeartbeatPeriod"`
	Password                *string `json:"password"`
	SslCipher               *string `json:"sslCipher"`
	Username                *string `json:"username"`
	VerifyServerCertificate *bool   `json:"verifyServerCertificate"`
}
