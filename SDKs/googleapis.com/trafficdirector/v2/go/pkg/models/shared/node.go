package shared

type Node struct {
	BuildVersion          *string                `json:"buildVersion"`
	ClientFeatures        []string               `json:"clientFeatures"`
	Cluster               *string                `json:"cluster"`
	Extensions            []Extension            `json:"extensions"`
	ID                    *string                `json:"id"`
	ListeningAddresses    []Address              `json:"listeningAddresses"`
	Locality              *Locality              `json:"locality"`
	Metadata              map[string]interface{} `json:"metadata"`
	UserAgentBuildVersion *BuildVersion          `json:"userAgentBuildVersion"`
	UserAgentName         *string                `json:"userAgentName"`
	UserAgentVersion      *string                `json:"userAgentVersion"`
}
