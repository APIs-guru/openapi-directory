package operations

type GetServersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetServersIDRequest struct {
	PathParams GetServersIDPathParams
}

type GetServersID200ApplicationJSONServerDatacenterLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type GetServersID200ApplicationJSONServerDatacenterServerTypes struct {
	Available             []float64 `json:"available"`
	AvailableForMigration []float64 `json:"available_for_migration"`
	Supported             []float64 `json:"supported"`
}

type GetServersID200ApplicationJSONServerDatacenter struct {
	Description string                                                    `json:"description"`
	ID          int64                                                     `json:"id"`
	Location    GetServersID200ApplicationJSONServerDatacenterLocation    `json:"location"`
	Name        string                                                    `json:"name"`
	ServerTypes GetServersID200ApplicationJSONServerDatacenterServerTypes `json:"server_types"`
}

type GetServersID200ApplicationJSONServerImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type GetServersID200ApplicationJSONServerImageOsFlavorEnum string

const (
	GetServersID200ApplicationJSONServerImageOsFlavorEnumUbuntu  GetServersID200ApplicationJSONServerImageOsFlavorEnum = "ubuntu"
	GetServersID200ApplicationJSONServerImageOsFlavorEnumCentos  GetServersID200ApplicationJSONServerImageOsFlavorEnum = "centos"
	GetServersID200ApplicationJSONServerImageOsFlavorEnumDebian  GetServersID200ApplicationJSONServerImageOsFlavorEnum = "debian"
	GetServersID200ApplicationJSONServerImageOsFlavorEnumFedora  GetServersID200ApplicationJSONServerImageOsFlavorEnum = "fedora"
	GetServersID200ApplicationJSONServerImageOsFlavorEnumUnknown GetServersID200ApplicationJSONServerImageOsFlavorEnum = "unknown"
)

type GetServersID200ApplicationJSONServerImageProtection struct {
	Delete bool `json:"delete"`
}

type GetServersID200ApplicationJSONServerImageStatusEnum string

const (
	GetServersID200ApplicationJSONServerImageStatusEnumAvailable   GetServersID200ApplicationJSONServerImageStatusEnum = "available"
	GetServersID200ApplicationJSONServerImageStatusEnumCreating    GetServersID200ApplicationJSONServerImageStatusEnum = "creating"
	GetServersID200ApplicationJSONServerImageStatusEnumUnavailable GetServersID200ApplicationJSONServerImageStatusEnum = "unavailable"
)

type GetServersID200ApplicationJSONServerImageTypeEnum string

const (
	GetServersID200ApplicationJSONServerImageTypeEnumSystem    GetServersID200ApplicationJSONServerImageTypeEnum = "system"
	GetServersID200ApplicationJSONServerImageTypeEnumApp       GetServersID200ApplicationJSONServerImageTypeEnum = "app"
	GetServersID200ApplicationJSONServerImageTypeEnumSnapshot  GetServersID200ApplicationJSONServerImageTypeEnum = "snapshot"
	GetServersID200ApplicationJSONServerImageTypeEnumBackup    GetServersID200ApplicationJSONServerImageTypeEnum = "backup"
	GetServersID200ApplicationJSONServerImageTypeEnumTemporary GetServersID200ApplicationJSONServerImageTypeEnum = "temporary"
)

type GetServersID200ApplicationJSONServerImage struct {
	BoundTo     int64                                                 `json:"bound_to"`
	BuildID     *string                                               `json:"build_id,omitempty"`
	Created     string                                                `json:"created"`
	CreatedFrom GetServersID200ApplicationJSONServerImageCreatedFrom  `json:"created_from"`
	Deleted     string                                                `json:"deleted"`
	Deprecated  string                                                `json:"deprecated"`
	Description string                                                `json:"description"`
	DiskSize    float64                                               `json:"disk_size"`
	ID          int64                                                 `json:"id"`
	ImageSize   float64                                               `json:"image_size"`
	Labels      map[string]string                                     `json:"labels"`
	Name        string                                                `json:"name"`
	OsFlavor    GetServersID200ApplicationJSONServerImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                                `json:"os_version"`
	Protection  GetServersID200ApplicationJSONServerImageProtection   `json:"protection"`
	RapidDeploy *bool                                                 `json:"rapid_deploy,omitempty"`
	Status      GetServersID200ApplicationJSONServerImageStatusEnum   `json:"status"`
	Type        GetServersID200ApplicationJSONServerImageTypeEnum     `json:"type"`
}

type GetServersID200ApplicationJSONServerIsoTypeEnum string

const (
	GetServersID200ApplicationJSONServerIsoTypeEnumPublic  GetServersID200ApplicationJSONServerIsoTypeEnum = "public"
	GetServersID200ApplicationJSONServerIsoTypeEnumPrivate GetServersID200ApplicationJSONServerIsoTypeEnum = "private"
)

type GetServersID200ApplicationJSONServerIso struct {
	Deprecated  string                                          `json:"deprecated"`
	Description string                                          `json:"description"`
	ID          int64                                           `json:"id"`
	Name        string                                          `json:"name"`
	Type        GetServersID200ApplicationJSONServerIsoTypeEnum `json:"type"`
}

type GetServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum string

const (
	GetServersID200ApplicationJSONServerPlacementGroupNullableTypeEnumSpread GetServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum = "spread"
)

type GetServersID200ApplicationJSONServerPlacementGroupNullable struct {
	Created string                                                             `json:"created"`
	ID      int64                                                              `json:"id"`
	Labels  map[string]string                                                  `json:"labels"`
	Name    string                                                             `json:"name"`
	Servers []int64                                                            `json:"servers"`
	Type    GetServersID200ApplicationJSONServerPlacementGroupNullableTypeEnum `json:"type"`
}

type GetServersID200ApplicationJSONServerPrivateNet struct {
	AliasIps   []string `json:"alias_ips,omitempty"`
	IP         *string  `json:"ip,omitempty"`
	MacAddress *string  `json:"mac_address,omitempty"`
	Network    *int64   `json:"network,omitempty"`
}

type GetServersID200ApplicationJSONServerProtection struct {
	Delete  bool `json:"delete"`
	Rebuild bool `json:"rebuild"`
}

type GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum string

const (
	GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnumApplied GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum = "applied"
	GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnumPending GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum = "pending"
)

type GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall struct {
	ID     *int64                                                                          `json:"id,omitempty"`
	Status *GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewallStatusEnum `json:"status,omitempty"`
}

type GetServersID200ApplicationJSONServerPublicNetIpv4 struct {
	Blocked bool   `json:"blocked"`
	DNSPtr  string `json:"dns_ptr"`
	IP      string `json:"ip"`
}

type GetServersID200ApplicationJSONServerPublicNetIpv6DNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type GetServersID200ApplicationJSONServerPublicNetIpv6 struct {
	Blocked bool                                                      `json:"blocked"`
	DNSPtr  []GetServersID200ApplicationJSONServerPublicNetIpv6DNSPtr `json:"dns_ptr"`
	IP      string                                                    `json:"ip"`
}

type GetServersID200ApplicationJSONServerPublicNet struct {
	Firewalls   []GetServersID200ApplicationJSONServerPublicNetServerPublicNetFirewall `json:"firewalls,omitempty"`
	FloatingIps []int64                                                                `json:"floating_ips"`
	Ipv4        GetServersID200ApplicationJSONServerPublicNetIpv4                      `json:"ipv4"`
	Ipv6        GetServersID200ApplicationJSONServerPublicNetIpv6                      `json:"ipv6"`
}

type GetServersID200ApplicationJSONServerServerTypeCPUTypeEnum string

const (
	GetServersID200ApplicationJSONServerServerTypeCPUTypeEnumShared    GetServersID200ApplicationJSONServerServerTypeCPUTypeEnum = "shared"
	GetServersID200ApplicationJSONServerServerTypeCPUTypeEnumDedicated GetServersID200ApplicationJSONServerServerTypeCPUTypeEnum = "dedicated"
)

type GetServersID200ApplicationJSONServerServerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetServersID200ApplicationJSONServerServerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetServersID200ApplicationJSONServerServerTypePrices struct {
	Location     string                                                           `json:"location"`
	PriceHourly  GetServersID200ApplicationJSONServerServerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetServersID200ApplicationJSONServerServerTypePricesPriceMonthly `json:"price_monthly"`
}

type GetServersID200ApplicationJSONServerServerTypeStorageTypeEnum string

const (
	GetServersID200ApplicationJSONServerServerTypeStorageTypeEnumLocal   GetServersID200ApplicationJSONServerServerTypeStorageTypeEnum = "local"
	GetServersID200ApplicationJSONServerServerTypeStorageTypeEnumNetwork GetServersID200ApplicationJSONServerServerTypeStorageTypeEnum = "network"
)

type GetServersID200ApplicationJSONServerServerType struct {
	Cores       float64                                                       `json:"cores"`
	CPUType     GetServersID200ApplicationJSONServerServerTypeCPUTypeEnum     `json:"cpu_type"`
	Deprecated  bool                                                          `json:"deprecated"`
	Description string                                                        `json:"description"`
	Disk        float64                                                       `json:"disk"`
	ID          int64                                                         `json:"id"`
	Memory      float64                                                       `json:"memory"`
	Name        string                                                        `json:"name"`
	Prices      []GetServersID200ApplicationJSONServerServerTypePrices        `json:"prices"`
	StorageType GetServersID200ApplicationJSONServerServerTypeStorageTypeEnum `json:"storage_type"`
}

type GetServersID200ApplicationJSONServerStatusEnum string

const (
	GetServersID200ApplicationJSONServerStatusEnumRunning      GetServersID200ApplicationJSONServerStatusEnum = "running"
	GetServersID200ApplicationJSONServerStatusEnumInitializing GetServersID200ApplicationJSONServerStatusEnum = "initializing"
	GetServersID200ApplicationJSONServerStatusEnumStarting     GetServersID200ApplicationJSONServerStatusEnum = "starting"
	GetServersID200ApplicationJSONServerStatusEnumStopping     GetServersID200ApplicationJSONServerStatusEnum = "stopping"
	GetServersID200ApplicationJSONServerStatusEnumOff          GetServersID200ApplicationJSONServerStatusEnum = "off"
	GetServersID200ApplicationJSONServerStatusEnumDeleting     GetServersID200ApplicationJSONServerStatusEnum = "deleting"
	GetServersID200ApplicationJSONServerStatusEnumMigrating    GetServersID200ApplicationJSONServerStatusEnum = "migrating"
	GetServersID200ApplicationJSONServerStatusEnumRebuilding   GetServersID200ApplicationJSONServerStatusEnum = "rebuilding"
	GetServersID200ApplicationJSONServerStatusEnumUnknown      GetServersID200ApplicationJSONServerStatusEnum = "unknown"
)

type GetServersID200ApplicationJSONServer struct {
	BackupWindow    string                                                      `json:"backup_window"`
	Created         string                                                      `json:"created"`
	Datacenter      GetServersID200ApplicationJSONServerDatacenter              `json:"datacenter"`
	ID              int64                                                       `json:"id"`
	Image           GetServersID200ApplicationJSONServerImage                   `json:"image"`
	IncludedTraffic float64                                                     `json:"included_traffic"`
	IngoingTraffic  float64                                                     `json:"ingoing_traffic"`
	Iso             GetServersID200ApplicationJSONServerIso                     `json:"iso"`
	Labels          map[string]string                                           `json:"labels"`
	LoadBalancers   []int64                                                     `json:"load_balancers,omitempty"`
	Locked          bool                                                        `json:"locked"`
	Name            string                                                      `json:"name"`
	OutgoingTraffic float64                                                     `json:"outgoing_traffic"`
	PlacementGroup  *GetServersID200ApplicationJSONServerPlacementGroupNullable `json:"placement_group,omitempty"`
	PrimaryDiskSize float64                                                     `json:"primary_disk_size"`
	PrivateNet      []GetServersID200ApplicationJSONServerPrivateNet            `json:"private_net"`
	Protection      GetServersID200ApplicationJSONServerProtection              `json:"protection"`
	PublicNet       GetServersID200ApplicationJSONServerPublicNet               `json:"public_net"`
	RescueEnabled   bool                                                        `json:"rescue_enabled"`
	ServerType      GetServersID200ApplicationJSONServerServerType              `json:"server_type"`
	Status          GetServersID200ApplicationJSONServerStatusEnum              `json:"status"`
	Volumes         []int64                                                     `json:"volumes,omitempty"`
}

type GetServersID200ApplicationJSON struct {
	Server *GetServersID200ApplicationJSONServer `json:"server,omitempty"`
}

type GetServersIDResponse struct {
	ContentType                          string
	GetServersID200ApplicationJSONObject *GetServersID200ApplicationJSON
	StatusCode                           int64
}
