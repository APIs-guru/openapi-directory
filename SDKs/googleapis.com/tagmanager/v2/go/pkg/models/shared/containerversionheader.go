package shared

type ContainerVersionHeader struct {
	AccountID          *string `json:"accountId"`
	ContainerID        *string `json:"containerId"`
	ContainerVersionID *string `json:"containerVersionId"`
	Deleted            *bool   `json:"deleted"`
	Name               *string `json:"name"`
	NumClients         *string `json:"numClients"`
	NumCustomTemplates *string `json:"numCustomTemplates"`
	NumMacros          *string `json:"numMacros"`
	NumRules           *string `json:"numRules"`
	NumTags            *string `json:"numTags"`
	NumTriggers        *string `json:"numTriggers"`
	NumVariables       *string `json:"numVariables"`
	NumZones           *string `json:"numZones"`
	Path               *string `json:"path"`
}
