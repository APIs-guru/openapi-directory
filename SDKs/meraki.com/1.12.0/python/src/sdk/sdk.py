

import requests
from sdk.models import shared
from . import utils

from .accesscontrollists import AccessControlLists
from .accesspolicies import AccessPolicies
from .acls import Acls
from .actionbatches import ActionBatches
from .adaptivepolicy import AdaptivePolicy
from .admins import Admins
from .airmarshal import AirMarshal
from .alerttypes import AlertTypes
from .alerts import Alerts
from .alternatemanagementinterface import AlternateManagementInterface
from .analytics import Analytics
from .apirequests import APIRequests
from .apnscert import ApnsCert
from .appliance import Appliance
from .applicationcategories import ApplicationCategories
from .applicationusage import ApplicationUsage
from .applications import Applications
from .bgp import Bgp
from .billing import Billing
from .bluetooth import Bluetooth
from .bluetoothclients import BluetoothClients
from .bonjourforwarding import BonjourForwarding
from .brandingpolicies import BrandingPolicies
from .bypassactivationlockattempts import BypassActivationLockAttempts
from .camera import Camera
from .categories import Categories
from .cellularfirewallrules import CellularFirewallRules
from .cellulargateway import CellularGateway
from .cellularusagehistory import CellularUsageHistory
from .certs import Certs
from .channelutilization import ChannelUtilization
from .channelutilizationhistory import ChannelUtilizationHistory
from .clientcounthistory import ClientCountHistory
from .clients import Clients
from .configtemplates import ConfigTemplates
from .configurationchanges import ConfigurationChanges
from .configure import Configure
from .connectionstats import ConnectionStats
from .connectivity import Connectivity
from .connectivityevents import ConnectivityEvents
from .connectivitymonitoringdestinations import ConnectivityMonitoringDestinations
from .contentfiltering import ContentFiltering
from .customperformanceclasses import CustomPerformanceClasses
from .dataratehistory import DataRateHistory
from .desktoplogs import DesktopLogs
from .devicecommandlogs import DeviceCommandLogs
from .deviceprofiles import DeviceProfiles
from .devicetypegrouppolicies import DeviceTypeGroupPolicies
from .devices import Devices
from .dhcp import Dhcp
from .dhcpserverpolicy import DhcpServerPolicy
from .dscptaggingoptions import DscpTaggingOptions
from .dscptocosmappings import DscpToCosMappings
from .eapoverride import EapOverride
from .eventtypes import EventTypes
from .events import Events
from .failedconnections import FailedConnections
from .fields import Fields
from .firewall import Firewall
from .firewalledservices import FirewalledServices
from .firmwareupgrades import FirmwareUpgrades
from .floorplans import FloorPlans
from .grouppolicies import GroupPolicies
from .healthbytime import HealthByTime
from .history import History
from .hotspot20 import Hotspot20
from .httpservers import HTTPServers
from .identitypsks import IdentityPsks
from .idps import Idps
from .inboundfirewallrules import InboundFirewallRules
from .insight import Insight
from .interfaces import Interfaces
from .intrusion import Intrusion
from .inventorydevices import InventoryDevices
from .l3firewallrules import L3FirewallRules
from .l7firewallrules import L7FirewallRules
from .lan import Lan
from .latencyhistory import LatencyHistory
from .latencystats import LatencyStats
from .licenses import Licenses
from .linkaggregations import LinkAggregations
from .live import Live
from .livetools import LiveTools
from .lldpcdp import LldpCdp
from .loginsecurity import LoginSecurity
from .logs import Logs
from .lossandlatencyhistory import LossAndLatencyHistory
from .malware import Malware
from .managementinterface import ManagementInterface
from .merakiauthusers import MerakiAuthUsers
from .meshstatuses import MeshStatuses
from .monitor import Monitor
from .monitoredmediaservers import MonitoredMediaServers
from .mqttbrokers import MqttBrokers
from .mtu import Mtu
from .multicast import Multicast
from .netflow import Netflow
from .networkadapters import NetworkAdapters
from .networkhealth import NetworkHealth
from .networks import Networks
from .objectdetectionmodels import ObjectDetectionModels
from .onboarding import Onboarding
from .onetomanynatrules import OneToManyNatRules
from .onetoonenatrules import OneToOneNatRules
from .openapispec import OpenapiSpec
from .order import Order
from .organizations import Organizations
from .ospf import Ospf
from .overview import Overview
from .packets import Packets
from .performance import Performance
from .performancehistory import PerformanceHistory
from .pii import Pii
from .piikeys import PiiKeys
from .policy import Policy
from .portforwardingrules import PortForwardingRules
from .portschedules import PortSchedules
from .ports import Ports
from .priorities import Priorities
from .profiles import Profiles
from .qosrules import QosRules
from .qualityandretention import QualityAndRetention
from .qualityretentionprofiles import QualityRetentionProfiles
from .radio import Radio
from .recent import Recent
from .rendezvouspoints import RendezvousPoints
from .requests import Requests
from .restrictions import Restrictions
from .rfprofiles import RfProfiles
from .rollbacks import Rollbacks
from .routing import Routing
from .rules import Rules
from .saml import Saml
from .samlroles import SamlRoles
from .schedules import Schedules
from .security import Security
from .securitycenters import SecurityCenters
from .sense import Sense
from .settings import Settings
from .signalqualityhistory import SignalQualityHistory
from .singlelan import SingleLan
from .sitetositevpn import SiteToSiteVpn
from .sm import Sm
from .smdevicesforkey import SmDevicesForKey
from .smownersforkey import SmOwnersForKey
from .snmp import Snmp
from .softwares import Softwares
from .splash import Splash
from .splashauthorizationstatus import SplashAuthorizationStatus
from .splashloginattempts import SplashLoginAttempts
from .ssids import Ssids
from .stacks import Stacks
from .staticroutes import StaticRoutes
from .stats import Stats
from .status import Status
from .statuses import Statuses
from .stormcontrol import StormControl
from .stp import Stp
from .subnetpool import SubnetPool
from .subnets import Subnets
from .switch import Switch
from .syslogservers import SyslogServers
from .targetgroups import TargetGroups
from .thirdpartyvpnpeers import ThirdPartyVpnPeers
from .traffic import Traffic
from .trafficanalysis import TrafficAnalysis
from .traffichistory import TrafficHistory
from .trafficshaping import TrafficShaping
from .uplink import Uplink
from .uplinkbandwidth import UplinkBandwidth
from .uplinkselection import UplinkSelection
from .uplinks import Uplinks
from .uplinkslossandlatency import UplinksLossAndLatency
from .usagehistories import UsageHistories
from .usagehistory import UsageHistory
from .useraccessdevices import UserAccessDevices
from .users import Users
from .video import Video
from .videolink import VideoLink
from .vlans import Vlans
from .vpn import Vpn
from .vpnfirewallrules import VpnFirewallRules
from .vppaccounts import VppAccounts
from .warmspare import WarmSpare
from .webhooktests import WebhookTests
from .webhooks import Webhooks
from .wireless import Wireless
from .wirelessprofiles import WirelessProfiles
from .wlanlists import WlanLists
from .zones import Zones


SERVERS = [
	"https://api.meraki.com/api/v1",
]


class SDK:
    
    access_control_lists: AccessControlLists
    access_policies: AccessPolicies
    acls: Acls
    action_batches: ActionBatches
    adaptive_policy: AdaptivePolicy
    admins: Admins
    air_marshal: AirMarshal
    alert_types: AlertTypes
    alerts: Alerts
    alternate_management_interface: AlternateManagementInterface
    analytics: Analytics
    api_requests: APIRequests
    apns_cert: ApnsCert
    appliance: Appliance
    application_categories: ApplicationCategories
    application_usage: ApplicationUsage
    applications: Applications
    bgp: Bgp
    billing: Billing
    bluetooth: Bluetooth
    bluetooth_clients: BluetoothClients
    bonjour_forwarding: BonjourForwarding
    branding_policies: BrandingPolicies
    bypass_activation_lock_attempts: BypassActivationLockAttempts
    camera: Camera
    categories: Categories
    cellular_firewall_rules: CellularFirewallRules
    cellular_gateway: CellularGateway
    cellular_usage_history: CellularUsageHistory
    certs: Certs
    channel_utilization: ChannelUtilization
    channel_utilization_history: ChannelUtilizationHistory
    client_count_history: ClientCountHistory
    clients: Clients
    config_templates: ConfigTemplates
    configuration_changes: ConfigurationChanges
    configure: Configure
    connection_stats: ConnectionStats
    connectivity: Connectivity
    connectivity_events: ConnectivityEvents
    connectivity_monitoring_destinations: ConnectivityMonitoringDestinations
    content_filtering: ContentFiltering
    custom_performance_classes: CustomPerformanceClasses
    data_rate_history: DataRateHistory
    desktop_logs: DesktopLogs
    device_command_logs: DeviceCommandLogs
    device_profiles: DeviceProfiles
    device_type_group_policies: DeviceTypeGroupPolicies
    devices: Devices
    dhcp: Dhcp
    dhcp_server_policy: DhcpServerPolicy
    dscp_tagging_options: DscpTaggingOptions
    dscp_to_cos_mappings: DscpToCosMappings
    eap_override: EapOverride
    event_types: EventTypes
    events: Events
    failed_connections: FailedConnections
    fields: Fields
    firewall: Firewall
    firewalled_services: FirewalledServices
    firmware_upgrades: FirmwareUpgrades
    floor_plans: FloorPlans
    group_policies: GroupPolicies
    health_by_time: HealthByTime
    history: History
    hotspot20: Hotspot20
    http_servers: HTTPServers
    identity_psks: IdentityPsks
    idps: Idps
    inbound_firewall_rules: InboundFirewallRules
    insight: Insight
    interfaces: Interfaces
    intrusion: Intrusion
    inventory_devices: InventoryDevices
    l3_firewall_rules: L3FirewallRules
    l7_firewall_rules: L7FirewallRules
    lan: Lan
    latency_history: LatencyHistory
    latency_stats: LatencyStats
    licenses: Licenses
    link_aggregations: LinkAggregations
    live: Live
    live_tools: LiveTools
    lldp_cdp: LldpCdp
    login_security: LoginSecurity
    logs: Logs
    loss_and_latency_history: LossAndLatencyHistory
    malware: Malware
    management_interface: ManagementInterface
    meraki_auth_users: MerakiAuthUsers
    mesh_statuses: MeshStatuses
    monitor: Monitor
    monitored_media_servers: MonitoredMediaServers
    mqtt_brokers: MqttBrokers
    mtu: Mtu
    multicast: Multicast
    netflow: Netflow
    network_adapters: NetworkAdapters
    network_health: NetworkHealth
    networks: Networks
    object_detection_models: ObjectDetectionModels
    onboarding: Onboarding
    one_to_many_nat_rules: OneToManyNatRules
    one_to_one_nat_rules: OneToOneNatRules
    openapi_spec: OpenapiSpec
    order: Order
    organizations: Organizations
    ospf: Ospf
    overview: Overview
    packets: Packets
    performance: Performance
    performance_history: PerformanceHistory
    pii: Pii
    pii_keys: PiiKeys
    policy: Policy
    port_forwarding_rules: PortForwardingRules
    port_schedules: PortSchedules
    ports: Ports
    priorities: Priorities
    profiles: Profiles
    qos_rules: QosRules
    quality_and_retention: QualityAndRetention
    quality_retention_profiles: QualityRetentionProfiles
    radio: Radio
    recent: Recent
    rendezvous_points: RendezvousPoints
    requests: Requests
    restrictions: Restrictions
    rf_profiles: RfProfiles
    rollbacks: Rollbacks
    routing: Routing
    rules: Rules
    saml: Saml
    saml_roles: SamlRoles
    schedules: Schedules
    security: Security
    security_centers: SecurityCenters
    sense: Sense
    settings: Settings
    signal_quality_history: SignalQualityHistory
    single_lan: SingleLan
    site_to_site_vpn: SiteToSiteVpn
    sm: Sm
    sm_devices_for_key: SmDevicesForKey
    sm_owners_for_key: SmOwnersForKey
    snmp: Snmp
    softwares: Softwares
    splash: Splash
    splash_authorization_status: SplashAuthorizationStatus
    splash_login_attempts: SplashLoginAttempts
    ssids: Ssids
    stacks: Stacks
    static_routes: StaticRoutes
    stats: Stats
    status: Status
    statuses: Statuses
    storm_control: StormControl
    stp: Stp
    subnet_pool: SubnetPool
    subnets: Subnets
    switch: Switch
    syslog_servers: SyslogServers
    target_groups: TargetGroups
    third_party_vpn_peers: ThirdPartyVpnPeers
    traffic: Traffic
    traffic_analysis: TrafficAnalysis
    traffic_history: TrafficHistory
    traffic_shaping: TrafficShaping
    uplink: Uplink
    uplink_bandwidth: UplinkBandwidth
    uplink_selection: UplinkSelection
    uplinks: Uplinks
    uplinks_loss_and_latency: UplinksLossAndLatency
    usage_histories: UsageHistories
    usage_history: UsageHistory
    user_access_devices: UserAccessDevices
    users: Users
    video: Video
    video_link: VideoLink
    vlans: Vlans
    vpn: Vpn
    vpn_firewall_rules: VpnFirewallRules
    vpp_accounts: VppAccounts
    warm_spare: WarmSpare
    webhook_tests: WebhookTests
    webhooks: Webhooks
    wireless: Wireless
    wireless_profiles: WirelessProfiles
    wlan_lists: WlanLists
    zones: Zones

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.access_control_lists = AccessControlLists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.access_policies = AccessPolicies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.acls = Acls(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.action_batches = ActionBatches(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.adaptive_policy = AdaptivePolicy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.admins = Admins(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.air_marshal = AirMarshal(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.alert_types = AlertTypes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.alerts = Alerts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.alternate_management_interface = AlternateManagementInterface(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.analytics = Analytics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.api_requests = APIRequests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.apns_cert = ApnsCert(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.appliance = Appliance(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.application_categories = ApplicationCategories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.application_usage = ApplicationUsage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.applications = Applications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bgp = Bgp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing = Billing(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bluetooth = Bluetooth(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bluetooth_clients = BluetoothClients(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bonjour_forwarding = BonjourForwarding(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.branding_policies = BrandingPolicies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bypass_activation_lock_attempts = BypassActivationLockAttempts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.camera = Camera(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.categories = Categories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cellular_firewall_rules = CellularFirewallRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cellular_gateway = CellularGateway(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cellular_usage_history = CellularUsageHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.certs = Certs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_utilization = ChannelUtilization(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channel_utilization_history = ChannelUtilizationHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.client_count_history = ClientCountHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.clients = Clients(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.config_templates = ConfigTemplates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.configuration_changes = ConfigurationChanges(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.configure = Configure(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.connection_stats = ConnectionStats(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.connectivity = Connectivity(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.connectivity_events = ConnectivityEvents(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.connectivity_monitoring_destinations = ConnectivityMonitoringDestinations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.content_filtering = ContentFiltering(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_performance_classes = CustomPerformanceClasses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.data_rate_history = DataRateHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.desktop_logs = DesktopLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.device_command_logs = DeviceCommandLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.device_profiles = DeviceProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.device_type_group_policies = DeviceTypeGroupPolicies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.devices = Devices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dhcp = Dhcp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dhcp_server_policy = DhcpServerPolicy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dscp_tagging_options = DscpTaggingOptions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dscp_to_cos_mappings = DscpToCosMappings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.eap_override = EapOverride(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.event_types = EventTypes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.events = Events(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.failed_connections = FailedConnections(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.fields = Fields(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.firewall = Firewall(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.firewalled_services = FirewalledServices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.firmware_upgrades = FirmwareUpgrades(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.floor_plans = FloorPlans(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.group_policies = GroupPolicies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.health_by_time = HealthByTime(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.history = History(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.hotspot20 = Hotspot20(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.http_servers = HTTPServers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.identity_psks = IdentityPsks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.idps = Idps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inbound_firewall_rules = InboundFirewallRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.insight = Insight(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.interfaces = Interfaces(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.intrusion = Intrusion(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inventory_devices = InventoryDevices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.l3_firewall_rules = L3FirewallRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.l7_firewall_rules = L7FirewallRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.lan = Lan(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.latency_history = LatencyHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.latency_stats = LatencyStats(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.licenses = Licenses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.link_aggregations = LinkAggregations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live = Live(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.live_tools = LiveTools(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.lldp_cdp = LldpCdp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.login_security = LoginSecurity(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.logs = Logs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.loss_and_latency_history = LossAndLatencyHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.malware = Malware(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.management_interface = ManagementInterface(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.meraki_auth_users = MerakiAuthUsers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mesh_statuses = MeshStatuses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.monitor = Monitor(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.monitored_media_servers = MonitoredMediaServers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mqtt_brokers = MqttBrokers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mtu = Mtu(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.multicast = Multicast(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.netflow = Netflow(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.network_adapters = NetworkAdapters(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.network_health = NetworkHealth(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.networks = Networks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.object_detection_models = ObjectDetectionModels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.onboarding = Onboarding(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.one_to_many_nat_rules = OneToManyNatRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.one_to_one_nat_rules = OneToOneNatRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.openapi_spec = OpenapiSpec(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.order = Order(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.organizations = Organizations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ospf = Ospf(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.overview = Overview(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.packets = Packets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.performance = Performance(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.performance_history = PerformanceHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pii = Pii(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.pii_keys = PiiKeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.policy = Policy(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.port_forwarding_rules = PortForwardingRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.port_schedules = PortSchedules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ports = Ports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.priorities = Priorities(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.profiles = Profiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.qos_rules = QosRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.quality_and_retention = QualityAndRetention(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.quality_retention_profiles = QualityRetentionProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.radio = Radio(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.recent = Recent(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rendezvous_points = RendezvousPoints(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.requests = Requests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.restrictions = Restrictions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rf_profiles = RfProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rollbacks = Rollbacks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.routing = Routing(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rules = Rules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.saml = Saml(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.saml_roles = SamlRoles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.schedules = Schedules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.security = Security(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.security_centers = SecurityCenters(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sense = Sense(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.settings = Settings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.signal_quality_history = SignalQualityHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.single_lan = SingleLan(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.site_to_site_vpn = SiteToSiteVpn(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sm = Sm(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sm_devices_for_key = SmDevicesForKey(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sm_owners_for_key = SmOwnersForKey(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.snmp = Snmp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.softwares = Softwares(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.splash = Splash(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.splash_authorization_status = SplashAuthorizationStatus(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.splash_login_attempts = SplashLoginAttempts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ssids = Ssids(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stacks = Stacks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.static_routes = StaticRoutes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stats = Stats(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.status = Status(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.statuses = Statuses(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.storm_control = StormControl(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.stp = Stp(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.subnet_pool = SubnetPool(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.subnets = Subnets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.switch = Switch(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.syslog_servers = SyslogServers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.target_groups = TargetGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.third_party_vpn_peers = ThirdPartyVpnPeers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.traffic = Traffic(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.traffic_analysis = TrafficAnalysis(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.traffic_history = TrafficHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.traffic_shaping = TrafficShaping(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.uplink = Uplink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.uplink_bandwidth = UplinkBandwidth(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.uplink_selection = UplinkSelection(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.uplinks = Uplinks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.uplinks_loss_and_latency = UplinksLossAndLatency(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.usage_histories = UsageHistories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.usage_history = UsageHistory(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_access_devices = UserAccessDevices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users = Users(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.video = Video(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.video_link = VideoLink(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vlans = Vlans(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vpn = Vpn(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vpn_firewall_rules = VpnFirewallRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.vpp_accounts = VppAccounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.warm_spare = WarmSpare(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.webhook_tests = WebhookTests(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.webhooks = Webhooks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.wireless = Wireless(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.wireless_profiles = WirelessProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.wlan_lists = WlanLists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.zones = Zones(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    