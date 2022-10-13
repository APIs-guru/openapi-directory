package shared

type ConnectivityTest struct {
	CreateTime          *string              `json:"createTime"`
	Description         *string              `json:"description"`
	Destination         *Endpoint            `json:"destination"`
	DisplayName         *string              `json:"displayName"`
	Labels              map[string]string    `json:"labels"`
	Name                *string              `json:"name"`
	Protocol            *string              `json:"protocol"`
	ReachabilityDetails *ReachabilityDetails `json:"reachabilityDetails"`
	RelatedProjects     []string             `json:"relatedProjects"`
	Source              *Endpoint            `json:"source"`
	UpdateTime          *string              `json:"updateTime"`
}
