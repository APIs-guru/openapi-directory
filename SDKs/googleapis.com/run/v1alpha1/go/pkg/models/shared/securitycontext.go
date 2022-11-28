package shared

// SecurityContext
// Not supported by Cloud Run SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
type SecurityContext struct {
	RunAsUser *int32 `json:"runAsUser,omitempty"`
}
