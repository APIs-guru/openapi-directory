package shared

type ContainerVersionHeader struct {
	AccountID          *string `json:"accountId,omitempty"`
	ContainerID        *string `json:"containerId,omitempty"`
	ContainerVersionID *string `json:"containerVersionId,omitempty"`
	Deleted            *bool   `json:"deleted,omitempty"`
	Name               *string `json:"name,omitempty"`
	NumClients         *string `json:"numClients,omitempty"`
	NumCustomTemplates *string `json:"numCustomTemplates,omitempty"`
	NumMacros          *string `json:"numMacros,omitempty"`
	NumRules           *string `json:"numRules,omitempty"`
	NumTags            *string `json:"numTags,omitempty"`
	NumTriggers        *string `json:"numTriggers,omitempty"`
	NumVariables       *string `json:"numVariables,omitempty"`
	NumZones           *string `json:"numZones,omitempty"`
	Path               *string `json:"path,omitempty"`
}
