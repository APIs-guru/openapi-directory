package shared

// RemoveTargetedAppsRequest
// A request to stop targeting the provided apps in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
type RemoveTargetedAppsRequest struct {
	AppIds []string `json:"appIds,omitempty"`
}
