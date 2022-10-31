package operations

type GetServersSortEnum string

const (
	GetServersSortEnumID          GetServersSortEnum = "id"
	GetServersSortEnumIDAsc       GetServersSortEnum = "id:asc"
	GetServersSortEnumIDDesc      GetServersSortEnum = "id:desc"
	GetServersSortEnumName        GetServersSortEnum = "name"
	GetServersSortEnumNameAsc     GetServersSortEnum = "name:asc"
	GetServersSortEnumNameDesc    GetServersSortEnum = "name:desc"
	GetServersSortEnumCreated     GetServersSortEnum = "created"
	GetServersSortEnumCreatedAsc  GetServersSortEnum = "created:asc"
	GetServersSortEnumCreatedDesc GetServersSortEnum = "created:desc"
)

type GetServersStatusEnum string

const (
	GetServersStatusEnumInitializing GetServersStatusEnum = "initializing"
	GetServersStatusEnumStarting     GetServersStatusEnum = "starting"
	GetServersStatusEnumRunning      GetServersStatusEnum = "running"
	GetServersStatusEnumStopping     GetServersStatusEnum = "stopping"
	GetServersStatusEnumOff          GetServersStatusEnum = "off"
	GetServersStatusEnumDeleting     GetServersStatusEnum = "deleting"
	GetServersStatusEnumRebuilding   GetServersStatusEnum = "rebuilding"
	GetServersStatusEnumMigrating    GetServersStatusEnum = "migrating"
	GetServersStatusEnumUnknown      GetServersStatusEnum = "unknown"
)

type GetServersQueryParams struct {
	LabelSelector *string               `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string               `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetServersSortEnum   `queryParam:"style=form,explode=true,name=sort"`
	Status        *GetServersStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type GetServersRequest struct {
	QueryParams GetServersQueryParams
}

type GetServers200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetServers200ApplicationJSONMeta struct {
	Pagination GetServers200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetServers200ApplicationJSONServersDatacenterLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type GetServers200ApplicationJSONServersDatacenterServerTypes struct {
	Available             []float64 `json:"available"`
	AvailableForMigration []float64 `json:"available_for_migration"`
	Supported             []float64 `json:"supported"`
}

type GetServers200ApplicationJSONServersDatacenter struct {
	Description string                                                   `json:"description"`
	ID          int64                                                    `json:"id"`
	Location    GetServers200ApplicationJSONServersDatacenterLocation    `json:"location"`
	Name        string                                                   `json:"name"`
	ServerTypes GetServers200ApplicationJSONServersDatacenterServerTypes `json:"server_types"`
}

type GetServers200ApplicationJSONServersImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetServers200ApplicationJSONServersImageOsFlavorEnum string

const (
	GetServers200ApplicationJSONServersImageOsFlavorEnumUbuntu  GetServers200ApplicationJSONServersImageOsFlavorEnum = "ubuntu"
	GetServers200ApplicationJSONServersImageOsFlavorEnumCentos  GetServers200ApplicationJSONServersImageOsFlavorEnum = "centos"
	GetServers200ApplicationJSONServersImageOsFlavorEnumDebian  GetServers200ApplicationJSONServersImageOsFlavorEnum = "debian"
	GetServers200ApplicationJSONServersImageOsFlavorEnumFedora  GetServers200ApplicationJSONServersImageOsFlavorEnum = "fedora"
	GetServers200ApplicationJSONServersImageOsFlavorEnumUnknown GetServers200ApplicationJSONServersImageOsFlavorEnum = "unknown"
)

type GetServers200ApplicationJSONServersImageProtection struct {
	Delete bool `json:"delete"`
}

type GetServers200ApplicationJSONServersImageStatusEnum string

const (
	GetServers200ApplicationJSONServersImageStatusEnumAvailable   GetServers200ApplicationJSONServersImageStatusEnum = "available"
	GetServers200ApplicationJSONServersImageStatusEnumCreating    GetServers200ApplicationJSONServersImageStatusEnum = "creating"
	GetServers200ApplicationJSONServersImageStatusEnumUnavailable GetServers200ApplicationJSONServersImageStatusEnum = "unavailable"
)

type GetServers200ApplicationJSONServersImageTypeEnum string

const (
	GetServers200ApplicationJSONServersImageTypeEnumSystem    GetServers200ApplicationJSONServersImageTypeEnum = "system"
	GetServers200ApplicationJSONServersImageTypeEnumApp       GetServers200ApplicationJSONServersImageTypeEnum = "app"
	GetServers200ApplicationJSONServersImageTypeEnumSnapshot  GetServers200ApplicationJSONServersImageTypeEnum = "snapshot"
	GetServers200ApplicationJSONServersImageTypeEnumBackup    GetServers200ApplicationJSONServersImageTypeEnum = "backup"
	GetServers200ApplicationJSONServersImageTypeEnumTemporary GetServers200ApplicationJSONServersImageTypeEnum = "temporary"
)

type GetServers200ApplicationJSONServersImage struct {
	BoundTo     int64                                                `json:"bound_to"`
	BuildID     *string                                              `json:"build_id,omitempty"`
	Created     string                                               `json:"created"`
	CreatedFrom GetServers200ApplicationJSONServersImageCreatedFrom  `json:"created_from"`
	Deleted     string                                               `json:"deleted"`
	Deprecated  string                                               `json:"deprecated"`
	Description string                                               `json:"description"`
	DiskSize    float64                                              `json:"disk_size"`
	ID          int64                                                `json:"id"`
	ImageSize   float64                                              `json:"image_size"`
	Labels      map[string]string                                    `json:"labels"`
	Name        string                                               `json:"name"`
	OsFlavor    GetServers200ApplicationJSONServersImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                               `json:"os_version"`
	Protection  GetServers200ApplicationJSONServersImageProtection   `json:"protection"`
	RapidDeploy *bool                                                `json:"rapid_deploy,omitempty"`
	Status      GetServers200ApplicationJSONServersImageStatusEnum   `json:"status"`
	Type        GetServers200ApplicationJSONServersImageTypeEnum     `json:"type"`
}

type GetServers200ApplicationJSONServersIsoTypeEnum string

const (
	GetServers200ApplicationJSONServersIsoTypeEnumPublic  GetServers200ApplicationJSONServersIsoTypeEnum = "public"
	GetServers200ApplicationJSONServersIsoTypeEnumPrivate GetServers200ApplicationJSONServersIsoTypeEnum = "private"
)

type GetServers200ApplicationJSONServersIso struct {
	Deprecated  string                                         `json:"deprecated"`
	Description string                                         `json:"description"`
	ID          int64                                          `json:"id"`
	Name        string                                         `json:"name"`
	Type        GetServers200ApplicationJSONServersIsoTypeEnum `json:"type"`
}

type GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum string

const (
	GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnumSpread GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum = "spread"
)

type GetServers200ApplicationJSONServersPlacementGroupNullable struct {
	Created string                                                            `json:"created"`
	ID      int64                                                             `json:"id"`
	Labels  map[string]string                                                 `json:"labels"`
	Name    string                                                            `json:"name"`
	Servers []int64                                                           `json:"servers"`
	Type    GetServers200ApplicationJSONServersPlacementGroupNullableTypeEnum `json:"type"`
}

type GetServers200ApplicationJSONServersPrivateNet struct {
	AliasIps   []string `json:"alias_ips,omitempty"`
	IP         *string  `json:"ip,omitempty"`
	MacAddress *string  `json:"mac_address,omitempty"`
	Network    *int64   `json:"network,omitempty"`
}

type GetServers200ApplicationJSONServersProtection struct {
	Delete  bool `json:"delete"`
	Rebuild bool `json:"rebuild"`
}

type GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum string

const (
	GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnumApplied GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum = "applied"
	GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnumPending GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum = "pending"
)

type GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall struct {
	ID     *int64                                                                         `json:"id,omitempty"`
	Status *GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewallStatusEnum `json:"status,omitempty"`
}

type GetServers200ApplicationJSONServersPublicNetIpv4 struct {
	Blocked bool   `json:"blocked"`
	DNSPtr  string `json:"dns_ptr"`
	IP      string `json:"ip"`
}

type GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type GetServers200ApplicationJSONServersPublicNetIpv6 struct {
	Blocked bool                                                     `json:"blocked"`
	DNSPtr  []GetServers200ApplicationJSONServersPublicNetIpv6DNSPtr `json:"dns_ptr"`
	IP      string                                                   `json:"ip"`
}

type GetServers200ApplicationJSONServersPublicNet struct {
	Firewalls   []GetServers200ApplicationJSONServersPublicNetServerPublicNetFirewall `json:"firewalls,omitempty"`
	FloatingIps []int64                                                               `json:"floating_ips"`
	Ipv4        GetServers200ApplicationJSONServersPublicNetIpv4                      `json:"ipv4"`
	Ipv6        GetServers200ApplicationJSONServersPublicNetIpv6                      `json:"ipv6"`
}

type GetServers200ApplicationJSONServersServerTypeCPUTypeEnum string

const (
	GetServers200ApplicationJSONServersServerTypeCPUTypeEnumShared    GetServers200ApplicationJSONServersServerTypeCPUTypeEnum = "shared"
	GetServers200ApplicationJSONServersServerTypeCPUTypeEnumDedicated GetServers200ApplicationJSONServersServerTypeCPUTypeEnum = "dedicated"
)

type GetServers200ApplicationJSONServersServerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetServers200ApplicationJSONServersServerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetServers200ApplicationJSONServersServerTypePrices struct {
	Location     string                                                          `json:"location"`
	PriceHourly  GetServers200ApplicationJSONServersServerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetServers200ApplicationJSONServersServerTypePricesPriceMonthly `json:"price_monthly"`
}

type GetServers200ApplicationJSONServersServerTypeStorageTypeEnum string

const (
	GetServers200ApplicationJSONServersServerTypeStorageTypeEnumLocal   GetServers200ApplicationJSONServersServerTypeStorageTypeEnum = "local"
	GetServers200ApplicationJSONServersServerTypeStorageTypeEnumNetwork GetServers200ApplicationJSONServersServerTypeStorageTypeEnum = "network"
)

type GetServers200ApplicationJSONServersServerType struct {
	Cores       float64                                                      `json:"cores"`
	CPUType     GetServers200ApplicationJSONServersServerTypeCPUTypeEnum     `json:"cpu_type"`
	Deprecated  bool                                                         `json:"deprecated"`
	Description string                                                       `json:"description"`
	Disk        float64                                                      `json:"disk"`
	ID          int64                                                        `json:"id"`
	Memory      float64                                                      `json:"memory"`
	Name        string                                                       `json:"name"`
	Prices      []GetServers200ApplicationJSONServersServerTypePrices        `json:"prices"`
	StorageType GetServers200ApplicationJSONServersServerTypeStorageTypeEnum `json:"storage_type"`
}

type GetServers200ApplicationJSONServersStatusEnum string

const (
	GetServers200ApplicationJSONServersStatusEnumRunning      GetServers200ApplicationJSONServersStatusEnum = "running"
	GetServers200ApplicationJSONServersStatusEnumInitializing GetServers200ApplicationJSONServersStatusEnum = "initializing"
	GetServers200ApplicationJSONServersStatusEnumStarting     GetServers200ApplicationJSONServersStatusEnum = "starting"
	GetServers200ApplicationJSONServersStatusEnumStopping     GetServers200ApplicationJSONServersStatusEnum = "stopping"
	GetServers200ApplicationJSONServersStatusEnumOff          GetServers200ApplicationJSONServersStatusEnum = "off"
	GetServers200ApplicationJSONServersStatusEnumDeleting     GetServers200ApplicationJSONServersStatusEnum = "deleting"
	GetServers200ApplicationJSONServersStatusEnumMigrating    GetServers200ApplicationJSONServersStatusEnum = "migrating"
	GetServers200ApplicationJSONServersStatusEnumRebuilding   GetServers200ApplicationJSONServersStatusEnum = "rebuilding"
	GetServers200ApplicationJSONServersStatusEnumUnknown      GetServers200ApplicationJSONServersStatusEnum = "unknown"
)

type GetServers200ApplicationJSONServers struct {
	BackupWindow    string                                                     `json:"backup_window"`
	Created         string                                                     `json:"created"`
	Datacenter      GetServers200ApplicationJSONServersDatacenter              `json:"datacenter"`
	ID              int64                                                      `json:"id"`
	Image           GetServers200ApplicationJSONServersImage                   `json:"image"`
	IncludedTraffic float64                                                    `json:"included_traffic"`
	IngoingTraffic  float64                                                    `json:"ingoing_traffic"`
	Iso             GetServers200ApplicationJSONServersIso                     `json:"iso"`
	Labels          map[string]string                                          `json:"labels"`
	LoadBalancers   []int64                                                    `json:"load_balancers,omitempty"`
	Locked          bool                                                       `json:"locked"`
	Name            string                                                     `json:"name"`
	OutgoingTraffic float64                                                    `json:"outgoing_traffic"`
	PlacementGroup  *GetServers200ApplicationJSONServersPlacementGroupNullable `json:"placement_group,omitempty"`
	PrimaryDiskSize float64                                                    `json:"primary_disk_size"`
	PrivateNet      []GetServers200ApplicationJSONServersPrivateNet            `json:"private_net"`
	Protection      GetServers200ApplicationJSONServersProtection              `json:"protection"`
	PublicNet       GetServers200ApplicationJSONServersPublicNet               `json:"public_net"`
	RescueEnabled   bool                                                       `json:"rescue_enabled"`
	ServerType      GetServers200ApplicationJSONServersServerType              `json:"server_type"`
	Status          GetServers200ApplicationJSONServersStatusEnum              `json:"status"`
	Volumes         []int64                                                    `json:"volumes,omitempty"`
}

type GetServers200ApplicationJSON struct {
	Meta    *GetServers200ApplicationJSONMeta     `json:"meta,omitempty"`
	Servers []GetServers200ApplicationJSONServers `json:"servers"`
}

type GetServersResponse struct {
	ContentType                        string
	GetServers200ApplicationJSONObject *GetServers200ApplicationJSON
	Headers                            map[string][]string
	StatusCode                         int64
}
