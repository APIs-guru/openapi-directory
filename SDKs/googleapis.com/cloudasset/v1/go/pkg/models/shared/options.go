package shared



type Options struct {
    AnalyzeServiceAccountImpersonation *bool `json:"analyzeServiceAccountImpersonation,omitempty"`
    ExpandGroups *bool `json:"expandGroups,omitempty"`
    ExpandResources *bool `json:"expandResources,omitempty"`
    ExpandRoles *bool `json:"expandRoles,omitempty"`
    OutputGroupEdges *bool `json:"outputGroupEdges,omitempty"`
    OutputResourceEdges *bool `json:"outputResourceEdges,omitempty"`
    
}

