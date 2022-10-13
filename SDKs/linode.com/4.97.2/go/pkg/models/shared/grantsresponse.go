package shared

type GrantsResponseGlobalAccountAccessEnum string

const (
	GrantsResponseGlobalAccountAccessEnumReadOnly  GrantsResponseGlobalAccountAccessEnum = "read_only"
	GrantsResponseGlobalAccountAccessEnumReadWrite GrantsResponseGlobalAccountAccessEnum = "read_write"
)

type GrantsResponseGlobal struct {
	AccountAccess        *GrantsResponseGlobalAccountAccessEnum `json:"account_access"`
	AddDomains           *bool                                  `json:"add_domains"`
	AddImages            *bool                                  `json:"add_images"`
	AddLinodes           *bool                                  `json:"add_linodes"`
	AddLongview          *bool                                  `json:"add_longview"`
	AddNodebalancers     *bool                                  `json:"add_nodebalancers"`
	AddStackscripts      *bool                                  `json:"add_stackscripts"`
	AddVolumes           *bool                                  `json:"add_volumes"`
	CancelAccount        *bool                                  `json:"cancel_account"`
	LongviewSubscription *bool                                  `json:"longview_subscription"`
}

type GrantsResponse struct {
	Domain       []Grant               `json:"domain"`
	Global       *GrantsResponseGlobal `json:"global"`
	Image        []Grant               `json:"image"`
	Linode       []Grant               `json:"linode"`
	Longview     []Grant               `json:"longview"`
	Nodebalancer []Grant               `json:"nodebalancer"`
	Stackscript  []Grant               `json:"stackscript"`
	Volume       []Grant               `json:"volume"`
}
