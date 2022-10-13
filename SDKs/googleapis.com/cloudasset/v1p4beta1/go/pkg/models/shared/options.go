package shared

type Options struct {
	AnalyzeServiceAccountImpersonation *bool `json:"analyzeServiceAccountImpersonation"`
	ExpandGroups                       *bool `json:"expandGroups"`
	ExpandResources                    *bool `json:"expandResources"`
	ExpandRoles                        *bool `json:"expandRoles"`
	OutputGroupEdges                   *bool `json:"outputGroupEdges"`
	OutputResourceEdges                *bool `json:"outputResourceEdges"`
}
