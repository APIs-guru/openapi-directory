package shared



type MySQLReplicaConfiguration struct {
    CaCertificate *string `json:"caCertificate,omitempty"`
    ClientCertificate *string `json:"clientCertificate,omitempty"`
    ClientKey *string `json:"clientKey,omitempty"`
    ConnectRetryInterval *int32 `json:"connectRetryInterval,omitempty"`
    DumpFilePath *string `json:"dumpFilePath,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MasterHeartbeatPeriod *string `json:"masterHeartbeatPeriod,omitempty"`
    Password *string `json:"password,omitempty"`
    SslCipher *string `json:"sslCipher,omitempty"`
    Username *string `json:"username,omitempty"`
    VerifyServerCertificate *bool `json:"verifyServerCertificate,omitempty"`
    
}

