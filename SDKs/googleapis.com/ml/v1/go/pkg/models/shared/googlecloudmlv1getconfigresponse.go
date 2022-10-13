package shared

type GoogleCloudMlV1GetConfigResponse struct {
	Config                *GoogleCloudMlV1Config `json:"config"`
	ServiceAccount        *string                `json:"serviceAccount"`
	ServiceAccountProject *string                `json:"serviceAccountProject"`
}
