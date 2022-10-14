package shared

type GrantsResponseGlobalAccountAccessEnum string

const (
	GrantsResponseGlobalAccountAccessEnumReadOnly  GrantsResponseGlobalAccountAccessEnum = "read_only"
	GrantsResponseGlobalAccountAccessEnumReadWrite GrantsResponseGlobalAccountAccessEnum = "read_write"
)

type GrantsResponseGlobal struct {
	AccountAccess        *GrantsResponseGlobalAccountAccessEnum `json:"account_access,omitempty"`
	AddDomains           *bool                                  `json:"add_domains,omitempty"`
	AddImages            *bool                                  `json:"add_images,omitempty"`
	AddLinodes           *bool                                  `json:"add_linodes,omitempty"`
	AddLongview          *bool                                  `json:"add_longview,omitempty"`
	AddNodebalancers     *bool                                  `json:"add_nodebalancers,omitempty"`
	AddStackscripts      *bool                                  `json:"add_stackscripts,omitempty"`
	AddVolumes           *bool                                  `json:"add_volumes,omitempty"`
	CancelAccount        *bool                                  `json:"cancel_account,omitempty"`
	LongviewSubscription *bool                                  `json:"longview_subscription,omitempty"`
}

type GrantsResponse struct {
	Domain       []Grant               `json:"domain,omitempty"`
	Global       *GrantsResponseGlobal `json:"global,omitempty"`
	Image        []Grant               `json:"image,omitempty"`
	Linode       []Grant               `json:"linode,omitempty"`
	Longview     []Grant               `json:"longview,omitempty"`
	Nodebalancer []Grant               `json:"nodebalancer,omitempty"`
	Stackscript  []Grant               `json:"stackscript,omitempty"`
	Volume       []Grant               `json:"volume,omitempty"`
}
