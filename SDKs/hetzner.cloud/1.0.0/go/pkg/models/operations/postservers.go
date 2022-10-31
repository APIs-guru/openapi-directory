package operations

type PostServersCreateServerRequestFirewalls struct {
	Firewall *int64 `json:"firewall,omitempty"`
}

type PostServersCreateServerRequest struct {
	Automount        *bool                                     `json:"automount,omitempty"`
	Datacenter       *string                                   `json:"datacenter,omitempty"`
	Firewalls        []PostServersCreateServerRequestFirewalls `json:"firewalls,omitempty"`
	Image            string                                    `json:"image"`
	Labels           map[string]interface{}                    `json:"labels,omitempty"`
	Location         *string                                   `json:"location,omitempty"`
	Name             string                                    `json:"name"`
	Networks         []int64                                   `json:"networks,omitempty"`
	ServerType       string                                    `json:"server_type"`
	SSHKeys          []string                                  `json:"ssh_keys,omitempty"`
	StartAfterCreate *bool                                     `json:"start_after_create,omitempty"`
	UserData         *string                                   `json:"user_data,omitempty"`
	Volumes          []int64                                   `json:"volumes,omitempty"`
}

type PostServersRequest struct {
	Request *PostServersCreateServerRequest `request:"mediaType=application/json"`
}

type PostServersCreateServerResponseActionError struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

type PostServersCreateServerResponseActionResources struct {
	ID   int64  `json:"id"`
	Type string `json:"type"`
}

type PostServersCreateServerResponseActionStatusEnum string

const (
	PostServersCreateServerResponseActionStatusEnumSuccess PostServersCreateServerResponseActionStatusEnum = "success"
	PostServersCreateServerResponseActionStatusEnumRunning PostServersCreateServerResponseActionStatusEnum = "running"
	PostServersCreateServerResponseActionStatusEnumError   PostServersCreateServerResponseActionStatusEnum = "error"
)

type PostServersCreateServerResponseAction struct {
	Command   string                                           `json:"command"`
	Error     PostServersCreateServerResponseActionError       `json:"error"`
	Finished  string                                           `json:"finished"`
	ID        int64                                            `json:"id"`
	Progress  float64                                          `json:"progress"`
	Resources []PostServersCreateServerResponseActionResources `json:"resources"`
	Started   string                                           `json:"started"`
	Status    PostServersCreateServerResponseActionStatusEnum  `json:"status"`
}

type PostServersCreateServerResponseServerDatacenterLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type PostServersCreateServerResponseServerDatacenterServerTypes struct {
	Available             []float64 `json:"available"`
	AvailableForMigration []float64 `json:"available_for_migration"`
	Supported             []float64 `json:"supported"`
}

type PostServersCreateServerResponseServerDatacenter struct {
	Description string                                                     `json:"description"`
	ID          int64                                                      `json:"id"`
	Location    PostServersCreateServerResponseServerDatacenterLocation    `json:"location"`
	Name        string                                                     `json:"name"`
	ServerTypes PostServersCreateServerResponseServerDatacenterServerTypes `json:"server_types"`
}

type PostServersCreateServerResponseServerImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PostServersCreateServerResponseServerImageOsFlavorEnum string

const (
	PostServersCreateServerResponseServerImageOsFlavorEnumUbuntu  PostServersCreateServerResponseServerImageOsFlavorEnum = "ubuntu"
	PostServersCreateServerResponseServerImageOsFlavorEnumCentos  PostServersCreateServerResponseServerImageOsFlavorEnum = "centos"
	PostServersCreateServerResponseServerImageOsFlavorEnumDebian  PostServersCreateServerResponseServerImageOsFlavorEnum = "debian"
	PostServersCreateServerResponseServerImageOsFlavorEnumFedora  PostServersCreateServerResponseServerImageOsFlavorEnum = "fedora"
	PostServersCreateServerResponseServerImageOsFlavorEnumUnknown PostServersCreateServerResponseServerImageOsFlavorEnum = "unknown"
)

type PostServersCreateServerResponseServerImageProtection struct {
	Delete bool `json:"delete"`
}

type PostServersCreateServerResponseServerImageStatusEnum string

const (
	PostServersCreateServerResponseServerImageStatusEnumAvailable   PostServersCreateServerResponseServerImageStatusEnum = "available"
	PostServersCreateServerResponseServerImageStatusEnumCreating    PostServersCreateServerResponseServerImageStatusEnum = "creating"
	PostServersCreateServerResponseServerImageStatusEnumUnavailable PostServersCreateServerResponseServerImageStatusEnum = "unavailable"
)

type PostServersCreateServerResponseServerImageTypeEnum string

const (
	PostServersCreateServerResponseServerImageTypeEnumSystem    PostServersCreateServerResponseServerImageTypeEnum = "system"
	PostServersCreateServerResponseServerImageTypeEnumApp       PostServersCreateServerResponseServerImageTypeEnum = "app"
	PostServersCreateServerResponseServerImageTypeEnumSnapshot  PostServersCreateServerResponseServerImageTypeEnum = "snapshot"
	PostServersCreateServerResponseServerImageTypeEnumBackup    PostServersCreateServerResponseServerImageTypeEnum = "backup"
	PostServersCreateServerResponseServerImageTypeEnumTemporary PostServersCreateServerResponseServerImageTypeEnum = "temporary"
)

type PostServersCreateServerResponseServerImage struct {
	BoundTo     int64                                                  `json:"bound_to"`
	BuildID     *string                                                `json:"build_id,omitempty"`
	Created     string                                                 `json:"created"`
	CreatedFrom PostServersCreateServerResponseServerImageCreatedFrom  `json:"created_from"`
	Deleted     string                                                 `json:"deleted"`
	Deprecated  string                                                 `json:"deprecated"`
	Description string                                                 `json:"description"`
	DiskSize    float64                                                `json:"disk_size"`
	ID          int64                                                  `json:"id"`
	ImageSize   float64                                                `json:"image_size"`
	Labels      map[string]string                                      `json:"labels"`
	Name        string                                                 `json:"name"`
	OsFlavor    PostServersCreateServerResponseServerImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                                 `json:"os_version"`
	Protection  PostServersCreateServerResponseServerImageProtection   `json:"protection"`
	RapidDeploy *bool                                                  `json:"rapid_deploy,omitempty"`
	Status      PostServersCreateServerResponseServerImageStatusEnum   `json:"status"`
	Type        PostServersCreateServerResponseServerImageTypeEnum     `json:"type"`
}

type PostServersCreateServerResponseServerIsoTypeEnum string

const (
	PostServersCreateServerResponseServerIsoTypeEnumPublic  PostServersCreateServerResponseServerIsoTypeEnum = "public"
	PostServersCreateServerResponseServerIsoTypeEnumPrivate PostServersCreateServerResponseServerIsoTypeEnum = "private"
)

type PostServersCreateServerResponseServerIso struct {
	Deprecated  string                                           `json:"deprecated"`
	Description string                                           `json:"description"`
	ID          int64                                            `json:"id"`
	Name        string                                           `json:"name"`
	Type        PostServersCreateServerResponseServerIsoTypeEnum `json:"type"`
}

type PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum string

const (
	PostServersCreateServerResponseServerPlacementGroupNullableTypeEnumSpread PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum = "spread"
)

type PostServersCreateServerResponseServerPlacementGroupNullable struct {
	Created string                                                              `json:"created"`
	ID      int64                                                               `json:"id"`
	Labels  map[string]string                                                   `json:"labels"`
	Name    string                                                              `json:"name"`
	Servers []int64                                                             `json:"servers"`
	Type    PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum `json:"type"`
}

type PostServersCreateServerResponseServerPrivateNet struct {
	AliasIps   []string `json:"alias_ips,omitempty"`
	IP         *string  `json:"ip,omitempty"`
	MacAddress *string  `json:"mac_address,omitempty"`
	Network    *int64   `json:"network,omitempty"`
}

type PostServersCreateServerResponseServerProtection struct {
	Delete  bool `json:"delete"`
	Rebuild bool `json:"rebuild"`
}

type PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum string

const (
	PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnumApplied PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum = "applied"
	PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnumPending PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum = "pending"
)

type PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall struct {
	ID     *int64                                                                           `json:"id,omitempty"`
	Status *PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum `json:"status,omitempty"`
}

type PostServersCreateServerResponseServerPublicNetIpv4 struct {
	Blocked bool   `json:"blocked"`
	DNSPtr  string `json:"dns_ptr"`
	IP      string `json:"ip"`
}

type PostServersCreateServerResponseServerPublicNetIpv6DNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type PostServersCreateServerResponseServerPublicNetIpv6 struct {
	Blocked bool                                                       `json:"blocked"`
	DNSPtr  []PostServersCreateServerResponseServerPublicNetIpv6DNSPtr `json:"dns_ptr"`
	IP      string                                                     `json:"ip"`
}

type PostServersCreateServerResponseServerPublicNet struct {
	Firewalls   []PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall `json:"firewalls,omitempty"`
	FloatingIps []int64                                                                 `json:"floating_ips"`
	Ipv4        PostServersCreateServerResponseServerPublicNetIpv4                      `json:"ipv4"`
	Ipv6        PostServersCreateServerResponseServerPublicNetIpv6                      `json:"ipv6"`
}

type PostServersCreateServerResponseServerServerTypeCPUTypeEnum string

const (
	PostServersCreateServerResponseServerServerTypeCPUTypeEnumShared    PostServersCreateServerResponseServerServerTypeCPUTypeEnum = "shared"
	PostServersCreateServerResponseServerServerTypeCPUTypeEnumDedicated PostServersCreateServerResponseServerServerTypeCPUTypeEnum = "dedicated"
)

type PostServersCreateServerResponseServerServerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PostServersCreateServerResponseServerServerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PostServersCreateServerResponseServerServerTypePrices struct {
	Location     string                                                            `json:"location"`
	PriceHourly  PostServersCreateServerResponseServerServerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly PostServersCreateServerResponseServerServerTypePricesPriceMonthly `json:"price_monthly"`
}

type PostServersCreateServerResponseServerServerTypeStorageTypeEnum string

const (
	PostServersCreateServerResponseServerServerTypeStorageTypeEnumLocal   PostServersCreateServerResponseServerServerTypeStorageTypeEnum = "local"
	PostServersCreateServerResponseServerServerTypeStorageTypeEnumNetwork PostServersCreateServerResponseServerServerTypeStorageTypeEnum = "network"
)

type PostServersCreateServerResponseServerServerType struct {
	Cores       float64                                                        `json:"cores"`
	CPUType     PostServersCreateServerResponseServerServerTypeCPUTypeEnum     `json:"cpu_type"`
	Deprecated  bool                                                           `json:"deprecated"`
	Description string                                                         `json:"description"`
	Disk        float64                                                        `json:"disk"`
	ID          int64                                                          `json:"id"`
	Memory      float64                                                        `json:"memory"`
	Name        string                                                         `json:"name"`
	Prices      []PostServersCreateServerResponseServerServerTypePrices        `json:"prices"`
	StorageType PostServersCreateServerResponseServerServerTypeStorageTypeEnum `json:"storage_type"`
}

type PostServersCreateServerResponseServerStatusEnum string

const (
	PostServersCreateServerResponseServerStatusEnumRunning      PostServersCreateServerResponseServerStatusEnum = "running"
	PostServersCreateServerResponseServerStatusEnumInitializing PostServersCreateServerResponseServerStatusEnum = "initializing"
	PostServersCreateServerResponseServerStatusEnumStarting     PostServersCreateServerResponseServerStatusEnum = "starting"
	PostServersCreateServerResponseServerStatusEnumStopping     PostServersCreateServerResponseServerStatusEnum = "stopping"
	PostServersCreateServerResponseServerStatusEnumOff          PostServersCreateServerResponseServerStatusEnum = "off"
	PostServersCreateServerResponseServerStatusEnumDeleting     PostServersCreateServerResponseServerStatusEnum = "deleting"
	PostServersCreateServerResponseServerStatusEnumMigrating    PostServersCreateServerResponseServerStatusEnum = "migrating"
	PostServersCreateServerResponseServerStatusEnumRebuilding   PostServersCreateServerResponseServerStatusEnum = "rebuilding"
	PostServersCreateServerResponseServerStatusEnumUnknown      PostServersCreateServerResponseServerStatusEnum = "unknown"
)

type PostServersCreateServerResponseServer struct {
	BackupWindow    string                                                       `json:"backup_window"`
	Created         string                                                       `json:"created"`
	Datacenter      PostServersCreateServerResponseServerDatacenter              `json:"datacenter"`
	ID              int64                                                        `json:"id"`
	Image           PostServersCreateServerResponseServerImage                   `json:"image"`
	IncludedTraffic float64                                                      `json:"included_traffic"`
	IngoingTraffic  float64                                                      `json:"ingoing_traffic"`
	Iso             PostServersCreateServerResponseServerIso                     `json:"iso"`
	Labels          map[string]string                                            `json:"labels"`
	LoadBalancers   []int64                                                      `json:"load_balancers,omitempty"`
	Locked          bool                                                         `json:"locked"`
	Name            string                                                       `json:"name"`
	OutgoingTraffic float64                                                      `json:"outgoing_traffic"`
	PlacementGroup  *PostServersCreateServerResponseServerPlacementGroupNullable `json:"placement_group,omitempty"`
	PrimaryDiskSize float64                                                      `json:"primary_disk_size"`
	PrivateNet      []PostServersCreateServerResponseServerPrivateNet            `json:"private_net"`
	Protection      PostServersCreateServerResponseServerProtection              `json:"protection"`
	PublicNet       PostServersCreateServerResponseServerPublicNet               `json:"public_net"`
	RescueEnabled   bool                                                         `json:"rescue_enabled"`
	ServerType      PostServersCreateServerResponseServerServerType              `json:"server_type"`
	Status          PostServersCreateServerResponseServerStatusEnum              `json:"status"`
	Volumes         []int64                                                      `json:"volumes,omitempty"`
}

type PostServersCreateServerResponse struct {
	Action       PostServersCreateServerResponseAction   `json:"action"`
	NextActions  []PostServersCreateServerResponseAction `json:"next_actions"`
	RootPassword string                                  `json:"root_password"`
	Server       PostServersCreateServerResponseServer   `json:"server"`
}

type PostServersResponse struct {
	ContentType          string
	CreateServerResponse *PostServersCreateServerResponse
	StatusCode           int64
}
