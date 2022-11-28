package shared

// GoogleCloudIntegrationsV1alphaSuspensionAudit
// Contains when and by whom the suspension was resolved.
type GoogleCloudIntegrationsV1alphaSuspensionAudit struct {
	ResolveTime *string `json:"resolveTime,omitempty"`
	Resolver    *string `json:"resolver,omitempty"`
}
