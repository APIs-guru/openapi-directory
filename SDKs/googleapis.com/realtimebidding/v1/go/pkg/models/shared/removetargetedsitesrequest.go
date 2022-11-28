package shared

// RemoveTargetedSitesRequest
// A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
type RemoveTargetedSitesRequest struct {
	Sites []string `json:"sites,omitempty"`
}
