package shared

type GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration struct {
	ExpireTime      *string `json:"expireTime"`
	LiftWhenExpired *bool   `json:"liftWhenExpired"`
	RemindTime      *string `json:"remindTime"`
}
