package operations

type PostServersRequestBodyFirewalls struct {
	Firewall *int64 `json:"firewall,omitempty"`
}

type PostServersRequestBodyCreateServerRequest struct {
	Automount        *bool                             `json:"automount,omitempty"`
	Datacenter       *string                           `json:"datacenter,omitempty"`
	Firewalls        []PostServersRequestBodyFirewalls `json:"firewalls,omitempty"`
	Image            string                            `json:"image"`
	Labels           map[string]interface{}            `json:"labels,omitempty"`
	Location         *string                           `json:"location,omitempty"`
	Name             string                            `json:"name"`
	Networks         []int64                           `json:"networks,omitempty"`
	ServerType       string                            `json:"server_type"`
	SSHKeys          []string                          `json:"ssh_keys,omitempty"`
	StartAfterCreate *bool                             `json:"start_after_create,omitempty"`
	UserData         *string                           `json:"user_data,omitempty"`
	Volumes          []int64                           `json:"volumes,omitempty"`
}

type PostServersRequest struct {
	Request *PostServersRequestBodyCreateServerRequest `request:"mediaType=application/json"`
}

type PostServers201ApplicationJSONActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServers201ApplicationJSONActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServers201ApplicationJSONActionStatusEnum string

const (
	PostServers201ApplicationJSONActionStatusEnumSuccess PostServers201ApplicationJSONActionStatusEnum = "success"
	PostServers201ApplicationJSONActionStatusEnumRunning PostServers201ApplicationJSONActionStatusEnum = "running"
	PostServers201ApplicationJSONActionStatusEnumError   PostServers201ApplicationJSONActionStatusEnum = "error"
)

type PostServers201ApplicationJSONActionAction struct {
	Command   string                                         `json:"command"`
	Error     PostServers201ApplicationJSONActionError       `json:"error"`
	Finished  string                                         `json:"finished"`
	ID        int64                                          `json:"id"`
	Progress  float64                                        `json:"progress"`
	Resources []PostServers201ApplicationJSONActionResources `json:"resources"`
	Started   string                                         `json:"started"`
	Status    PostServers201ApplicationJSONActionStatusEnum  `json:"status"`
}

type PostServers201ApplicationJSONNextActionsError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServers201ApplicationJSONNextActionsResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServers201ApplicationJSONNextActionsStatusEnum string

const (
	PostServers201ApplicationJSONNextActionsStatusEnumSuccess PostServers201ApplicationJSONNextActionsStatusEnum = "success"
	PostServers201ApplicationJSONNextActionsStatusEnumRunning PostServers201ApplicationJSONNextActionsStatusEnum = "running"
	PostServers201ApplicationJSONNextActionsStatusEnumError   PostServers201ApplicationJSONNextActionsStatusEnum = "error"
)

type PostServers201ApplicationJSONNextActionsAction struct {
	Command   string                                              `json:"command"`
	Error     PostServers201ApplicationJSONNextActionsError       `json:"error"`
	Finished  string                                              `json:"finished"`
	ID        int64                                               `json:"id"`
	Progress  float64                                             `json:"progress"`
	Resources []PostServers201ApplicationJSONNextActionsResources `json:"resources"`
	Started   string                                              `json:"started"`
	Status    PostServers201ApplicationJSONNextActionsStatusEnum  `json:"status"`
}

type PostServers201ApplicationJSONServerDatacenterLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type PostServers201ApplicationJSONServerDatacenterServerTypes struct {
	Available             []float64 `json:"available"`
	AvailableForMigration []float64 `json:"available_for_migration"`
	Supported             []float64 `json:"supported"`
}

type PostServers201ApplicationJSONServerDatacenter struct {
	Description string                                                   `json:"description"`
	ID          int64                                                    `json:"id"`
	Location    PostServers201ApplicationJSONServerDatacenterLocation    `json:"location"`
	Name        string                                                   `json:"name"`
	ServerTypes PostServers201ApplicationJSONServerDatacenterServerTypes `json:"server_types"`
}

type PostServers201ApplicationJSONServerImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PostServers201ApplicationJSONServerImageOsFlavorEnum string

const (
	PostServers201ApplicationJSONServerImageOsFlavorEnumUbuntu  PostServers201ApplicationJSONServerImageOsFlavorEnum = "ubuntu"
	PostServers201ApplicationJSONServerImageOsFlavorEnumCentos  PostServers201ApplicationJSONServerImageOsFlavorEnum = "centos"
	PostServers201ApplicationJSONServerImageOsFlavorEnumDebian  PostServers201ApplicationJSONServerImageOsFlavorEnum = "debian"
	PostServers201ApplicationJSONServerImageOsFlavorEnumFedora  PostServers201ApplicationJSONServerImageOsFlavorEnum = "fedora"
	PostServers201ApplicationJSONServerImageOsFlavorEnumUnknown PostServers201ApplicationJSONServerImageOsFlavorEnum = "unknown"
)

type PostServers201ApplicationJSONServerImageProtection struct {
	Delete bool `json:"delete"`
}

type PostServers201ApplicationJSONServerImageStatusEnum string

const (
	PostServers201ApplicationJSONServerImageStatusEnumAvailable   PostServers201ApplicationJSONServerImageStatusEnum = "available"
	PostServers201ApplicationJSONServerImageStatusEnumCreating    PostServers201ApplicationJSONServerImageStatusEnum = "creating"
	PostServers201ApplicationJSONServerImageStatusEnumUnavailable PostServers201ApplicationJSONServerImageStatusEnum = "unavailable"
)

type PostServers201ApplicationJSONServerImageTypeEnum string

const (
	PostServers201ApplicationJSONServerImageTypeEnumSystem    PostServers201ApplicationJSONServerImageTypeEnum = "system"
	PostServers201ApplicationJSONServerImageTypeEnumApp       PostServers201ApplicationJSONServerImageTypeEnum = "app"
	PostServers201ApplicationJSONServerImageTypeEnumSnapshot  PostServers201ApplicationJSONServerImageTypeEnum = "snapshot"
	PostServers201ApplicationJSONServerImageTypeEnumBackup    PostServers201ApplicationJSONServerImageTypeEnum = "backup"
	PostServers201ApplicationJSONServerImageTypeEnumTemporary PostServers201ApplicationJSONServerImageTypeEnum = "temporary"
)

type PostServers201ApplicationJSONServerImage struct {
	BoundTo     int64                                                `json:"bound_to"`
	BuildID     *string                                              `json:"build_id,omitempty"`
	Created     string                                               `json:"created"`
	CreatedFrom PostServers201ApplicationJSONServerImageCreatedFrom  `json:"created_from"`
	Deleted     string                                               `json:"deleted"`
	Deprecated  string                                               `json:"deprecated"`
	Description string                                               `json:"description"`
	DiskSize    float64                                              `json:"disk_size"`
	ID          int64                                                `json:"id"`
	ImageSize   float64                                              `json:"image_size"`
	Labels      map[string]string                                    `json:"labels"`
	Name        string                                               `json:"name"`
	OsFlavor    PostServers201ApplicationJSONServerImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                               `json:"os_version"`
	Protection  PostServers201ApplicationJSONServerImageProtection   `json:"protection"`
	RapidDeploy *bool                                                `json:"rapid_deploy,omitempty"`
	Status      PostServers201ApplicationJSONServerImageStatusEnum   `json:"status"`
	Type        PostServers201ApplicationJSONServerImageTypeEnum     `json:"type"`
}

type PostServers201ApplicationJSONServerIsoTypeEnum string

const (
	PostServers201ApplicationJSONServerIsoTypeEnumPublic  PostServers201ApplicationJSONServerIsoTypeEnum = "public"
	PostServers201ApplicationJSONServerIsoTypeEnumPrivate PostServers201ApplicationJSONServerIsoTypeEnum = "private"
)

type PostServers201ApplicationJSONServerIso struct {
	Deprecated  string                                         `json:"deprecated"`
	Description string                                         `json:"description"`
	ID          int64                                          `json:"id"`
	Name        string                                         `json:"name"`
	Type        PostServers201ApplicationJSONServerIsoTypeEnum `json:"type"`
}

type PostServers201ApplicationJSONServerPlacementGroupTypeEnum string

const (
	PostServers201ApplicationJSONServerPlacementGroupTypeEnumSpread PostServers201ApplicationJSONServerPlacementGroupTypeEnum = "spread"
)

type PostServers201ApplicationJSONServerPlacementGroupPlacementGroupNullable struct {
	Created string                                                    `json:"created"`
	ID      int64                                                     `json:"id"`
	Labels  map[string]string                                         `json:"labels"`
	Name    string                                                    `json:"name"`
	Servers []int64                                                   `json:"servers"`
	Type    PostServers201ApplicationJSONServerPlacementGroupTypeEnum `json:"type"`
}

type PostServers201ApplicationJSONServerPrivateNet struct {
	AliasIps   []string `json:"alias_ips,omitempty"`
	IP         *string  `json:"ip,omitempty"`
	MacAddress *string  `json:"mac_address,omitempty"`
	Network    *int64   `json:"network,omitempty"`
}

type PostServers201ApplicationJSONServerProtection struct {
	Delete  bool `json:"delete"`
	Rebuild bool `json:"rebuild"`
}

type PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnum string

const (
	PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnumApplied PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnum = "applied"
	PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnumPending PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnum = "pending"
)

type PostServers201ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall struct {
	ID     *int64                                                           `json:"id,omitempty"`
	Status *PostServers201ApplicationJSONServerPublicNetFirewallsStatusEnum `json:"status,omitempty"`
}

type PostServers201ApplicationJSONServerPublicNetIpv4 struct {
	Blocked bool   `json:"blocked"`
	DNSPtr  string `json:"dns_ptr"`
	IP      string `json:"ip"`
}

type PostServers201ApplicationJSONServerPublicNetIpv6DNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type PostServers201ApplicationJSONServerPublicNetIpv6 struct {
	Blocked bool                                                     `json:"blocked"`
	DNSPtr  []PostServers201ApplicationJSONServerPublicNetIpv6DNSPtr `json:"dns_ptr"`
	IP      string                                                   `json:"ip"`
}

type PostServers201ApplicationJSONServerPublicNet struct {
	Firewalls   []PostServers201ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall `json:"firewalls,omitempty"`
	FloatingIps []int64                                                                        `json:"floating_ips"`
	Ipv4        PostServers201ApplicationJSONServerPublicNetIpv4                               `json:"ipv4"`
	Ipv6        PostServers201ApplicationJSONServerPublicNetIpv6                               `json:"ipv6"`
}

type PostServers201ApplicationJSONServerServerTypeCPUTypeEnum string

const (
	PostServers201ApplicationJSONServerServerTypeCPUTypeEnumShared    PostServers201ApplicationJSONServerServerTypeCPUTypeEnum = "shared"
	PostServers201ApplicationJSONServerServerTypeCPUTypeEnumDedicated PostServers201ApplicationJSONServerServerTypeCPUTypeEnum = "dedicated"
)

type PostServers201ApplicationJSONServerServerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PostServers201ApplicationJSONServerServerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PostServers201ApplicationJSONServerServerTypePrices struct {
	Location     string                                                          `json:"location"`
	PriceHourly  PostServers201ApplicationJSONServerServerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly PostServers201ApplicationJSONServerServerTypePricesPriceMonthly `json:"price_monthly"`
}

type PostServers201ApplicationJSONServerServerTypeStorageTypeEnum string

const (
	PostServers201ApplicationJSONServerServerTypeStorageTypeEnumLocal   PostServers201ApplicationJSONServerServerTypeStorageTypeEnum = "local"
	PostServers201ApplicationJSONServerServerTypeStorageTypeEnumNetwork PostServers201ApplicationJSONServerServerTypeStorageTypeEnum = "network"
)

type PostServers201ApplicationJSONServerServerType struct {
	Cores       float64                                                      `json:"cores"`
	CPUType     PostServers201ApplicationJSONServerServerTypeCPUTypeEnum     `json:"cpu_type"`
	Deprecated  bool                                                         `json:"deprecated"`
	Description string                                                       `json:"description"`
	Disk        float64                                                      `json:"disk"`
	ID          int64                                                        `json:"id"`
	Memory      float64                                                      `json:"memory"`
	Name        string                                                       `json:"name"`
	Prices      []PostServers201ApplicationJSONServerServerTypePrices        `json:"prices"`
	StorageType PostServers201ApplicationJSONServerServerTypeStorageTypeEnum `json:"storage_type"`
}

type PostServers201ApplicationJSONServerStatusEnum string

const (
	PostServers201ApplicationJSONServerStatusEnumRunning      PostServers201ApplicationJSONServerStatusEnum = "running"
	PostServers201ApplicationJSONServerStatusEnumInitializing PostServers201ApplicationJSONServerStatusEnum = "initializing"
	PostServers201ApplicationJSONServerStatusEnumStarting     PostServers201ApplicationJSONServerStatusEnum = "starting"
	PostServers201ApplicationJSONServerStatusEnumStopping     PostServers201ApplicationJSONServerStatusEnum = "stopping"
	PostServers201ApplicationJSONServerStatusEnumOff          PostServers201ApplicationJSONServerStatusEnum = "off"
	PostServers201ApplicationJSONServerStatusEnumDeleting     PostServers201ApplicationJSONServerStatusEnum = "deleting"
	PostServers201ApplicationJSONServerStatusEnumMigrating    PostServers201ApplicationJSONServerStatusEnum = "migrating"
	PostServers201ApplicationJSONServerStatusEnumRebuilding   PostServers201ApplicationJSONServerStatusEnum = "rebuilding"
	PostServers201ApplicationJSONServerStatusEnumUnknown      PostServers201ApplicationJSONServerStatusEnum = "unknown"
)

type PostServers201ApplicationJSONServer struct {
	BackupWindow    string                                                                   `json:"backup_window"`
	Created         string                                                                   `json:"created"`
	Datacenter      PostServers201ApplicationJSONServerDatacenter                            `json:"datacenter"`
	ID              int64                                                                    `json:"id"`
	Image           PostServers201ApplicationJSONServerImage                                 `json:"image"`
	IncludedTraffic float64                                                                  `json:"included_traffic"`
	IngoingTraffic  float64                                                                  `json:"ingoing_traffic"`
	Iso             PostServers201ApplicationJSONServerIso                                   `json:"iso"`
	Labels          map[string]string                                                        `json:"labels"`
	LoadBalancers   []int64                                                                  `json:"load_balancers,omitempty"`
	Locked          bool                                                                     `json:"locked"`
	Name            string                                                                   `json:"name"`
	OutgoingTraffic float64                                                                  `json:"outgoing_traffic"`
	PlacementGroup  *PostServers201ApplicationJSONServerPlacementGroupPlacementGroupNullable `json:"placement_group,omitempty"`
	PrimaryDiskSize float64                                                                  `json:"primary_disk_size"`
	PrivateNet      []PostServers201ApplicationJSONServerPrivateNet                          `json:"private_net"`
	Protection      PostServers201ApplicationJSONServerProtection                            `json:"protection"`
	PublicNet       PostServers201ApplicationJSONServerPublicNet                             `json:"public_net"`
	RescueEnabled   bool                                                                     `json:"rescue_enabled"`
	ServerType      PostServers201ApplicationJSONServerServerType                            `json:"server_type"`
	Status          PostServers201ApplicationJSONServerStatusEnum                            `json:"status"`
	Volumes         []int64                                                                  `json:"volumes,omitempty"`
}

type PostServers201ApplicationJSONCreateServerResponse struct {
	Action       PostServers201ApplicationJSONActionAction        `json:"action"`
	NextActions  []PostServers201ApplicationJSONNextActionsAction `json:"next_actions"`
	RootPassword string                                           `json:"root_password"`
	Server       PostServers201ApplicationJSONServer              `json:"server"`
}

type PostServersResponse struct {
	ContentType          string
	CreateServerResponse *PostServers201ApplicationJSONCreateServerResponse
	StatusCode           int64
}
