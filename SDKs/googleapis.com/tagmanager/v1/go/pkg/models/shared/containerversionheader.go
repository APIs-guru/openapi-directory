package shared

type ContainerVersionHeader struct {
	AccountID          *string `json:"accountId"`
	ContainerID        *string `json:"containerId"`
	ContainerVersionID *string `json:"containerVersionId"`
	Deleted            *bool   `json:"deleted"`
	Name               *string `json:"name"`
	NumMacros          *string `json:"numMacros"`
	NumRules           *string `json:"numRules"`
	NumTags            *string `json:"numTags"`
	NumTriggers        *string `json:"numTriggers"`
	NumVariables       *string `json:"numVariables"`
}
