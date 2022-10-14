package operations

type PutServersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutServersIDRequestBodyUpdateServerRequest struct {
	Labels map[string]interface{} `json:"labels,omitempty"`
	Name   *string                `json:"name,omitempty"`
}

type PutServersIDRequest struct {
	PathParams PutServersIDPathParams
	Request    *PutServersIDRequestBodyUpdateServerRequest `request:"mediaType=application/json"`
}

type PutServersID200ApplicationJSONServerDatacenterLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type PutServersID200ApplicationJSONServerDatacenterServerTypes struct {
	Available             []float64 `json:"available"`
	AvailableForMigration []float64 `json:"available_for_migration"`
	Supported             []float64 `json:"supported"`
}

type PutServersID200ApplicationJSONServerDatacenter struct {
	Description string                                                    `json:"description"`
	ID          int64                                                     `json:"id"`
	Location    PutServersID200ApplicationJSONServerDatacenterLocation    `json:"location"`
	Name        string                                                    `json:"name"`
	ServerTypes PutServersID200ApplicationJSONServerDatacenterServerTypes `json:"server_types"`
}

type PutServersID200ApplicationJSONServerImageCreatedFrom struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
}

type PutServersID200ApplicationJSONServerImageOsFlavorEnum string

const (
	PutServersID200ApplicationJSONServerImageOsFlavorEnumUbuntu  PutServersID200ApplicationJSONServerImageOsFlavorEnum = "ubuntu"
	PutServersID200ApplicationJSONServerImageOsFlavorEnumCentos  PutServersID200ApplicationJSONServerImageOsFlavorEnum = "centos"
	PutServersID200ApplicationJSONServerImageOsFlavorEnumDebian  PutServersID200ApplicationJSONServerImageOsFlavorEnum = "debian"
	PutServersID200ApplicationJSONServerImageOsFlavorEnumFedora  PutServersID200ApplicationJSONServerImageOsFlavorEnum = "fedora"
	PutServersID200ApplicationJSONServerImageOsFlavorEnumUnknown PutServersID200ApplicationJSONServerImageOsFlavorEnum = "unknown"
)

type PutServersID200ApplicationJSONServerImageProtection struct {
	Delete bool `json:"delete"`
}

type PutServersID200ApplicationJSONServerImageStatusEnum string

const (
	PutServersID200ApplicationJSONServerImageStatusEnumAvailable   PutServersID200ApplicationJSONServerImageStatusEnum = "available"
	PutServersID200ApplicationJSONServerImageStatusEnumCreating    PutServersID200ApplicationJSONServerImageStatusEnum = "creating"
	PutServersID200ApplicationJSONServerImageStatusEnumUnavailable PutServersID200ApplicationJSONServerImageStatusEnum = "unavailable"
)

type PutServersID200ApplicationJSONServerImageTypeEnum string

const (
	PutServersID200ApplicationJSONServerImageTypeEnumSystem    PutServersID200ApplicationJSONServerImageTypeEnum = "system"
	PutServersID200ApplicationJSONServerImageTypeEnumApp       PutServersID200ApplicationJSONServerImageTypeEnum = "app"
	PutServersID200ApplicationJSONServerImageTypeEnumSnapshot  PutServersID200ApplicationJSONServerImageTypeEnum = "snapshot"
	PutServersID200ApplicationJSONServerImageTypeEnumBackup    PutServersID200ApplicationJSONServerImageTypeEnum = "backup"
	PutServersID200ApplicationJSONServerImageTypeEnumTemporary PutServersID200ApplicationJSONServerImageTypeEnum = "temporary"
)

type PutServersID200ApplicationJSONServerImage struct {
	BoundTo     int64                                                 `json:"bound_to"`
	BuildID     *string                                               `json:"build_id,omitempty"`
	Created     string                                                `json:"created"`
	CreatedFrom PutServersID200ApplicationJSONServerImageCreatedFrom  `json:"created_from"`
	Deleted     string                                                `json:"deleted"`
	Deprecated  string                                                `json:"deprecated"`
	Description string                                                `json:"description"`
	DiskSize    float64                                               `json:"disk_size"`
	ID          int64                                                 `json:"id"`
	ImageSize   float64                                               `json:"image_size"`
	Labels      map[string]string                                     `json:"labels"`
	Name        string                                                `json:"name"`
	OsFlavor    PutServersID200ApplicationJSONServerImageOsFlavorEnum `json:"os_flavor"`
	OsVersion   string                                                `json:"os_version"`
	Protection  PutServersID200ApplicationJSONServerImageProtection   `json:"protection"`
	RapidDeploy *bool                                                 `json:"rapid_deploy,omitempty"`
	Status      PutServersID200ApplicationJSONServerImageStatusEnum   `json:"status"`
	Type        PutServersID200ApplicationJSONServerImageTypeEnum     `json:"type"`
}

type PutServersID200ApplicationJSONServerIsoTypeEnum string

const (
	PutServersID200ApplicationJSONServerIsoTypeEnumPublic  PutServersID200ApplicationJSONServerIsoTypeEnum = "public"
	PutServersID200ApplicationJSONServerIsoTypeEnumPrivate PutServersID200ApplicationJSONServerIsoTypeEnum = "private"
)

type PutServersID200ApplicationJSONServerIso struct {
	Deprecated  string                                          `json:"deprecated"`
	Description string                                          `json:"description"`
	ID          int64                                           `json:"id"`
	Name        string                                          `json:"name"`
	Type        PutServersID200ApplicationJSONServerIsoTypeEnum `json:"type"`
}

type PutServersID200ApplicationJSONServerPlacementGroupTypeEnum string

const (
	PutServersID200ApplicationJSONServerPlacementGroupTypeEnumSpread PutServersID200ApplicationJSONServerPlacementGroupTypeEnum = "spread"
)

type PutServersID200ApplicationJSONServerPlacementGroupPlacementGroupNullable struct {
	Created string                                                     `json:"created"`
	ID      int64                                                      `json:"id"`
	Labels  map[string]string                                          `json:"labels"`
	Name    string                                                     `json:"name"`
	Servers []int64                                                    `json:"servers"`
	Type    PutServersID200ApplicationJSONServerPlacementGroupTypeEnum `json:"type"`
}

type PutServersID200ApplicationJSONServerPrivateNet struct {
	AliasIps   []string `json:"alias_ips,omitempty"`
	IP         *string  `json:"ip,omitempty"`
	MacAddress *string  `json:"mac_address,omitempty"`
	Network    *int64   `json:"network,omitempty"`
}

type PutServersID200ApplicationJSONServerProtection struct {
	Delete  bool `json:"delete"`
	Rebuild bool `json:"rebuild"`
}

type PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnum string

const (
	PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnumApplied PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnum = "applied"
	PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnumPending PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnum = "pending"
)

type PutServersID200ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall struct {
	ID     *int64                                                            `json:"id,omitempty"`
	Status *PutServersID200ApplicationJSONServerPublicNetFirewallsStatusEnum `json:"status,omitempty"`
}

type PutServersID200ApplicationJSONServerPublicNetIpv4 struct {
	Blocked bool   `json:"blocked"`
	DNSPtr  string `json:"dns_ptr"`
	IP      string `json:"ip"`
}

type PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type PutServersID200ApplicationJSONServerPublicNetIpv6 struct {
	Blocked bool                                                      `json:"blocked"`
	DNSPtr  []PutServersID200ApplicationJSONServerPublicNetIpv6DNSPtr `json:"dns_ptr"`
	IP      string                                                    `json:"ip"`
}

type PutServersID200ApplicationJSONServerPublicNet struct {
	Firewalls   []PutServersID200ApplicationJSONServerPublicNetFirewallsServerPublicNetFirewall `json:"firewalls,omitempty"`
	FloatingIps []int64                                                                         `json:"floating_ips"`
	Ipv4        PutServersID200ApplicationJSONServerPublicNetIpv4                               `json:"ipv4"`
	Ipv6        PutServersID200ApplicationJSONServerPublicNetIpv6                               `json:"ipv6"`
}

type PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum string

const (
	PutServersID200ApplicationJSONServerServerTypeCPUTypeEnumShared    PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum = "shared"
	PutServersID200ApplicationJSONServerServerTypeCPUTypeEnumDedicated PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum = "dedicated"
)

type PutServersID200ApplicationJSONServerServerTypePricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type PutServersID200ApplicationJSONServerServerTypePrices struct {
	Location     string                                                           `json:"location"`
	PriceHourly  PutServersID200ApplicationJSONServerServerTypePricesPriceHourly  `json:"price_hourly"`
	PriceMonthly PutServersID200ApplicationJSONServerServerTypePricesPriceMonthly `json:"price_monthly"`
}

type PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum string

const (
	PutServersID200ApplicationJSONServerServerTypeStorageTypeEnumLocal   PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum = "local"
	PutServersID200ApplicationJSONServerServerTypeStorageTypeEnumNetwork PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum = "network"
)

type PutServersID200ApplicationJSONServerServerType struct {
	Cores       float64                                                       `json:"cores"`
	CPUType     PutServersID200ApplicationJSONServerServerTypeCPUTypeEnum     `json:"cpu_type"`
	Deprecated  bool                                                          `json:"deprecated"`
	Description string                                                        `json:"description"`
	Disk        float64                                                       `json:"disk"`
	ID          int64                                                         `json:"id"`
	Memory      float64                                                       `json:"memory"`
	Name        string                                                        `json:"name"`
	Prices      []PutServersID200ApplicationJSONServerServerTypePrices        `json:"prices"`
	StorageType PutServersID200ApplicationJSONServerServerTypeStorageTypeEnum `json:"storage_type"`
}

type PutServersID200ApplicationJSONServerStatusEnum string

const (
	PutServersID200ApplicationJSONServerStatusEnumRunning      PutServersID200ApplicationJSONServerStatusEnum = "running"
	PutServersID200ApplicationJSONServerStatusEnumInitializing PutServersID200ApplicationJSONServerStatusEnum = "initializing"
	PutServersID200ApplicationJSONServerStatusEnumStarting     PutServersID200ApplicationJSONServerStatusEnum = "starting"
	PutServersID200ApplicationJSONServerStatusEnumStopping     PutServersID200ApplicationJSONServerStatusEnum = "stopping"
	PutServersID200ApplicationJSONServerStatusEnumOff          PutServersID200ApplicationJSONServerStatusEnum = "off"
	PutServersID200ApplicationJSONServerStatusEnumDeleting     PutServersID200ApplicationJSONServerStatusEnum = "deleting"
	PutServersID200ApplicationJSONServerStatusEnumMigrating    PutServersID200ApplicationJSONServerStatusEnum = "migrating"
	PutServersID200ApplicationJSONServerStatusEnumRebuilding   PutServersID200ApplicationJSONServerStatusEnum = "rebuilding"
	PutServersID200ApplicationJSONServerStatusEnumUnknown      PutServersID200ApplicationJSONServerStatusEnum = "unknown"
)

type PutServersID200ApplicationJSONServer struct {
	BackupWindow    string                                                                    `json:"backup_window"`
	Created         string                                                                    `json:"created"`
	Datacenter      PutServersID200ApplicationJSONServerDatacenter                            `json:"datacenter"`
	ID              int64                                                                     `json:"id"`
	Image           PutServersID200ApplicationJSONServerImage                                 `json:"image"`
	IncludedTraffic float64                                                                   `json:"included_traffic"`
	IngoingTraffic  float64                                                                   `json:"ingoing_traffic"`
	Iso             PutServersID200ApplicationJSONServerIso                                   `json:"iso"`
	Labels          map[string]string                                                         `json:"labels"`
	LoadBalancers   []int64                                                                   `json:"load_balancers,omitempty"`
	Locked          bool                                                                      `json:"locked"`
	Name            string                                                                    `json:"name"`
	OutgoingTraffic float64                                                                   `json:"outgoing_traffic"`
	PlacementGroup  *PutServersID200ApplicationJSONServerPlacementGroupPlacementGroupNullable `json:"placement_group,omitempty"`
	PrimaryDiskSize float64                                                                   `json:"primary_disk_size"`
	PrivateNet      []PutServersID200ApplicationJSONServerPrivateNet                          `json:"private_net"`
	Protection      PutServersID200ApplicationJSONServerProtection                            `json:"protection"`
	PublicNet       PutServersID200ApplicationJSONServerPublicNet                             `json:"public_net"`
	RescueEnabled   bool                                                                      `json:"rescue_enabled"`
	ServerType      PutServersID200ApplicationJSONServerServerType                            `json:"server_type"`
	Status          PutServersID200ApplicationJSONServerStatusEnum                            `json:"status"`
	Volumes         []int64                                                                   `json:"volumes,omitempty"`
}

type PutServersID200ApplicationJSON struct {
	Server *PutServersID200ApplicationJSONServer `json:"server,omitempty"`
}

type PutServersIDResponse struct {
	ContentType                          string
	PutServersID200ApplicationJSONObject *PutServersID200ApplicationJSON
	StatusCode                           int64
}
