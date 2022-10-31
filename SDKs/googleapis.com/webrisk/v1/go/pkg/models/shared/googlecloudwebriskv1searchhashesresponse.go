package shared



type GoogleCloudWebriskV1SearchHashesResponse struct {
    NegativeExpireTime *string `json:"negativeExpireTime,omitempty"`
    Threats []GoogleCloudWebriskV1SearchHashesResponseThreatHash `json:"threats,omitempty"`
    
}

