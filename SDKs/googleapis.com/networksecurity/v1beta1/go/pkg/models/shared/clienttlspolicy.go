package shared



type ClientTLSPolicy struct {
    ClientCertificate *GoogleCloudNetworksecurityV1beta1CertificateProvider `json:"clientCertificate,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    ServerValidationCa []ValidationCa `json:"serverValidationCa,omitempty"`
    Sni *string `json:"sni,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

