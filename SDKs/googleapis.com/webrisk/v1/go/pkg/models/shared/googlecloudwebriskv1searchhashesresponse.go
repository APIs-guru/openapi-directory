package shared

type GoogleCloudWebriskV1SearchHashesResponse struct {
	NegativeExpireTime *string                                              `json:"negativeExpireTime"`
	Threats            []GoogleCloudWebriskV1SearchHashesResponseThreatHash `json:"threats"`
}
