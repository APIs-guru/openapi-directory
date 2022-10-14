package shared

type GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration struct {
	ExpireTime      *string `json:"expireTime,omitempty"`
	LiftWhenExpired *bool   `json:"liftWhenExpired,omitempty"`
	RemindTime      *string `json:"remindTime,omitempty"`
}
