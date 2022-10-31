package shared



type ConnectivityTest struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Destination *Endpoint `json:"destination,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    ReachabilityDetails *ReachabilityDetails `json:"reachabilityDetails,omitempty"`
    RelatedProjects []string `json:"relatedProjects,omitempty"`
    Source *Endpoint `json:"source,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

