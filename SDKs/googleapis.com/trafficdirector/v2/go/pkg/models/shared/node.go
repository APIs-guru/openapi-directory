package shared



type Node struct {
    BuildVersion *string `json:"buildVersion,omitempty"`
    ClientFeatures []string `json:"clientFeatures,omitempty"`
    Cluster *string `json:"cluster,omitempty"`
    Extensions []Extension `json:"extensions,omitempty"`
    ID *string `json:"id,omitempty"`
    ListeningAddresses []Address `json:"listeningAddresses,omitempty"`
    Locality *Locality `json:"locality,omitempty"`
    Metadata map[string]interface{} `json:"metadata,omitempty"`
    UserAgentBuildVersion *BuildVersion `json:"userAgentBuildVersion,omitempty"`
    UserAgentName *string `json:"userAgentName,omitempty"`
    UserAgentVersion *string `json:"userAgentVersion,omitempty"`
    
}

