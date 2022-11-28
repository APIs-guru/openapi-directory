import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security as SecurityModel } from "./models/shared";

import { AccessControlLists } from "./accesscontrollists";
import { AccessPolicies } from "./accesspolicies";
import { Acls } from "./acls";
import { ActionBatches } from "./actionbatches";
import { AdaptivePolicy } from "./adaptivepolicy";
import { Admins } from "./admins";
import { AirMarshal } from "./airmarshal";
import { AlertTypes } from "./alerttypes";
import { Alerts } from "./alerts";
import { AlternateManagementInterface } from "./alternatemanagementinterface";
import { Analytics } from "./analytics";
import { ApiRequests } from "./apirequests";
import { ApnsCert } from "./apnscert";
import { Appliance } from "./appliance";
import { ApplicationCategories } from "./applicationcategories";
import { ApplicationUsage } from "./applicationusage";
import { Applications } from "./applications";
import { Bgp } from "./bgp";
import { Billing } from "./billing";
import { Bluetooth } from "./bluetooth";
import { BluetoothClients } from "./bluetoothclients";
import { BonjourForwarding } from "./bonjourforwarding";
import { BrandingPolicies } from "./brandingpolicies";
import { BypassActivationLockAttempts } from "./bypassactivationlockattempts";
import { Camera } from "./camera";
import { Categories } from "./categories";
import { CellularFirewallRules } from "./cellularfirewallrules";
import { CellularGateway } from "./cellulargateway";
import { CellularUsageHistory } from "./cellularusagehistory";
import { Certs } from "./certs";
import { ChannelUtilization } from "./channelutilization";
import { ChannelUtilizationHistory } from "./channelutilizationhistory";
import { ClientCountHistory } from "./clientcounthistory";
import { Clients } from "./clients";
import { ConfigTemplates } from "./configtemplates";
import { ConfigurationChanges } from "./configurationchanges";
import { Configure } from "./configure";
import { ConnectionStats } from "./connectionstats";
import { Connectivity } from "./connectivity";
import { ConnectivityEvents } from "./connectivityevents";
import { ConnectivityMonitoringDestinations } from "./connectivitymonitoringdestinations";
import { ContentFiltering } from "./contentfiltering";
import { CustomPerformanceClasses } from "./customperformanceclasses";
import { DataRateHistory } from "./dataratehistory";
import { DesktopLogs } from "./desktoplogs";
import { DeviceCommandLogs } from "./devicecommandlogs";
import { DeviceProfiles } from "./deviceprofiles";
import { DeviceTypeGroupPolicies } from "./devicetypegrouppolicies";
import { Devices } from "./devices";
import { Dhcp } from "./dhcp";
import { DhcpServerPolicy } from "./dhcpserverpolicy";
import { DscpTaggingOptions } from "./dscptaggingoptions";
import { DscpToCosMappings } from "./dscptocosmappings";
import { EapOverride } from "./eapoverride";
import { EventTypes } from "./eventtypes";
import { Events } from "./events";
import { FailedConnections } from "./failedconnections";
import { Fields } from "./fields";
import { Firewall } from "./firewall";
import { FirewalledServices } from "./firewalledservices";
import { FirmwareUpgrades } from "./firmwareupgrades";
import { FloorPlans } from "./floorplans";
import { GroupPolicies } from "./grouppolicies";
import { HealthByTime } from "./healthbytime";
import { History } from "./history";
import { Hotspot20 } from "./hotspot20";
import { HttpServers } from "./httpservers";
import { IdentityPsks } from "./identitypsks";
import { Idps } from "./idps";
import { InboundFirewallRules } from "./inboundfirewallrules";
import { Insight } from "./insight";
import { Interfaces } from "./interfaces";
import { Intrusion } from "./intrusion";
import { InventoryDevices } from "./inventorydevices";
import { L3FirewallRules } from "./l3firewallrules";
import { L7FirewallRules } from "./l7firewallrules";
import { Lan } from "./lan";
import { LatencyHistory } from "./latencyhistory";
import { LatencyStats } from "./latencystats";
import { Licenses } from "./licenses";
import { LinkAggregations } from "./linkaggregations";
import { Live } from "./live";
import { LiveTools } from "./livetools";
import { LldpCdp } from "./lldpcdp";
import { LoginSecurity } from "./loginsecurity";
import { Logs } from "./logs";
import { LossAndLatencyHistory } from "./lossandlatencyhistory";
import { Malware } from "./malware";
import { ManagementInterface } from "./managementinterface";
import { MerakiAuthUsers } from "./merakiauthusers";
import { MeshStatuses } from "./meshstatuses";
import { Monitor } from "./monitor";
import { MonitoredMediaServers } from "./monitoredmediaservers";
import { MqttBrokers } from "./mqttbrokers";
import { Mtu } from "./mtu";
import { Multicast } from "./multicast";
import { Netflow } from "./netflow";
import { NetworkAdapters } from "./networkadapters";
import { NetworkHealth } from "./networkhealth";
import { Networks } from "./networks";
import { ObjectDetectionModels } from "./objectdetectionmodels";
import { Onboarding } from "./onboarding";
import { OneToManyNatRules } from "./onetomanynatrules";
import { OneToOneNatRules } from "./onetoonenatrules";
import { OpenapiSpec } from "./openapispec";
import { Order } from "./order";
import { Organizations } from "./organizations";
import { Ospf } from "./ospf";
import { Overview } from "./overview";
import { Packets } from "./packets";
import { Performance } from "./performance";
import { PerformanceHistory } from "./performancehistory";
import { Pii } from "./pii";
import { PiiKeys } from "./piikeys";
import { Policy } from "./policy";
import { PortForwardingRules } from "./portforwardingrules";
import { PortSchedules } from "./portschedules";
import { Ports } from "./ports";
import { Priorities } from "./priorities";
import { Profiles } from "./profiles";
import { QosRules } from "./qosrules";
import { QualityAndRetention } from "./qualityandretention";
import { QualityRetentionProfiles } from "./qualityretentionprofiles";
import { Radio } from "./radio";
import { Recent } from "./recent";
import { RendezvousPoints } from "./rendezvouspoints";
import { Requests } from "./requests";
import { Restrictions } from "./restrictions";
import { RfProfiles } from "./rfprofiles";
import { Rollbacks } from "./rollbacks";
import { Routing } from "./routing";
import { Rules } from "./rules";
import { Saml } from "./saml";
import { SamlRoles } from "./samlroles";
import { Schedules } from "./schedules";
import { Security } from "./security";
import { SecurityCenters } from "./securitycenters";
import { Sense } from "./sense";
import { Settings } from "./settings";
import { SignalQualityHistory } from "./signalqualityhistory";
import { SingleLan } from "./singlelan";
import { SiteToSiteVpn } from "./sitetositevpn";
import { Sm } from "./sm";
import { SmDevicesForKey } from "./smdevicesforkey";
import { SmOwnersForKey } from "./smownersforkey";
import { Snmp } from "./snmp";
import { Softwares } from "./softwares";
import { Splash } from "./splash";
import { SplashAuthorizationStatus } from "./splashauthorizationstatus";
import { SplashLoginAttempts } from "./splashloginattempts";
import { Ssids } from "./ssids";
import { Stacks } from "./stacks";
import { StaticRoutes } from "./staticroutes";
import { Stats } from "./stats";
import { Status } from "./status";
import { Statuses } from "./statuses";
import { StormControl } from "./stormcontrol";
import { Stp } from "./stp";
import { SubnetPool } from "./subnetpool";
import { Subnets } from "./subnets";
import { Switch } from "./switch";
import { SyslogServers } from "./syslogservers";
import { TargetGroups } from "./targetgroups";
import { ThirdPartyVpnPeers } from "./thirdpartyvpnpeers";
import { Traffic } from "./traffic";
import { TrafficAnalysis } from "./trafficanalysis";
import { TrafficHistory } from "./traffichistory";
import { TrafficShaping } from "./trafficshaping";
import { Uplink } from "./uplink";
import { UplinkBandwidth } from "./uplinkbandwidth";
import { UplinkSelection } from "./uplinkselection";
import { Uplinks } from "./uplinks";
import { UplinksLossAndLatency } from "./uplinkslossandlatency";
import { UsageHistories } from "./usagehistories";
import { UsageHistory } from "./usagehistory";
import { UserAccessDevices } from "./useraccessdevices";
import { Users } from "./users";
import { Video } from "./video";
import { VideoLink } from "./videolink";
import { Vlans } from "./vlans";
import { Vpn } from "./vpn";
import { VpnFirewallRules } from "./vpnfirewallrules";
import { VppAccounts } from "./vppaccounts";
import { WarmSpare } from "./warmspare";
import { WebhookTests } from "./webhooktests";
import { Webhooks } from "./webhooks";
import { Wireless } from "./wireless";
import { WirelessProfiles } from "./wirelessprofiles";
import { WlanLists } from "./wlanlists";
import { Zones } from "./zones";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.meraki.com/api/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: SecurityModel): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new SecurityModel(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {
  public accessControlLists: AccessControlLists;
  public accessPolicies: AccessPolicies;
  public acls: Acls;
  public actionBatches: ActionBatches;
  public adaptivePolicy: AdaptivePolicy;
  public admins: Admins;
  public airMarshal: AirMarshal;
  public alertTypes: AlertTypes;
  public alerts: Alerts;
  public alternateManagementInterface: AlternateManagementInterface;
  public analytics: Analytics;
  public apiRequests: ApiRequests;
  public apnsCert: ApnsCert;
  public appliance: Appliance;
  public applicationCategories: ApplicationCategories;
  public applicationUsage: ApplicationUsage;
  public applications: Applications;
  public bgp: Bgp;
  public billing: Billing;
  public bluetooth: Bluetooth;
  public bluetoothClients: BluetoothClients;
  public bonjourForwarding: BonjourForwarding;
  public brandingPolicies: BrandingPolicies;
  public bypassActivationLockAttempts: BypassActivationLockAttempts;
  public camera: Camera;
  public categories: Categories;
  public cellularFirewallRules: CellularFirewallRules;
  public cellularGateway: CellularGateway;
  public cellularUsageHistory: CellularUsageHistory;
  public certs: Certs;
  public channelUtilization: ChannelUtilization;
  public channelUtilizationHistory: ChannelUtilizationHistory;
  public clientCountHistory: ClientCountHistory;
  public clients: Clients;
  public configTemplates: ConfigTemplates;
  public configurationChanges: ConfigurationChanges;
  public configure: Configure;
  public connectionStats: ConnectionStats;
  public connectivity: Connectivity;
  public connectivityEvents: ConnectivityEvents;
  public connectivityMonitoringDestinations: ConnectivityMonitoringDestinations;
  public contentFiltering: ContentFiltering;
  public customPerformanceClasses: CustomPerformanceClasses;
  public dataRateHistory: DataRateHistory;
  public desktopLogs: DesktopLogs;
  public deviceCommandLogs: DeviceCommandLogs;
  public deviceProfiles: DeviceProfiles;
  public deviceTypeGroupPolicies: DeviceTypeGroupPolicies;
  public devices: Devices;
  public dhcp: Dhcp;
  public dhcpServerPolicy: DhcpServerPolicy;
  public dscpTaggingOptions: DscpTaggingOptions;
  public dscpToCosMappings: DscpToCosMappings;
  public eapOverride: EapOverride;
  public eventTypes: EventTypes;
  public events: Events;
  public failedConnections: FailedConnections;
  public fields: Fields;
  public firewall: Firewall;
  public firewalledServices: FirewalledServices;
  public firmwareUpgrades: FirmwareUpgrades;
  public floorPlans: FloorPlans;
  public groupPolicies: GroupPolicies;
  public healthByTime: HealthByTime;
  public history: History;
  public hotspot20: Hotspot20;
  public httpServers: HttpServers;
  public identityPsks: IdentityPsks;
  public idps: Idps;
  public inboundFirewallRules: InboundFirewallRules;
  public insight: Insight;
  public interfaces: Interfaces;
  public intrusion: Intrusion;
  public inventoryDevices: InventoryDevices;
  public l3FirewallRules: L3FirewallRules;
  public l7FirewallRules: L7FirewallRules;
  public lan: Lan;
  public latencyHistory: LatencyHistory;
  public latencyStats: LatencyStats;
  public licenses: Licenses;
  public linkAggregations: LinkAggregations;
  public live: Live;
  public liveTools: LiveTools;
  public lldpCdp: LldpCdp;
  public loginSecurity: LoginSecurity;
  public logs: Logs;
  public lossAndLatencyHistory: LossAndLatencyHistory;
  public malware: Malware;
  public managementInterface: ManagementInterface;
  public merakiAuthUsers: MerakiAuthUsers;
  public meshStatuses: MeshStatuses;
  public monitor: Monitor;
  public monitoredMediaServers: MonitoredMediaServers;
  public mqttBrokers: MqttBrokers;
  public mtu: Mtu;
  public multicast: Multicast;
  public netflow: Netflow;
  public networkAdapters: NetworkAdapters;
  public networkHealth: NetworkHealth;
  public networks: Networks;
  public objectDetectionModels: ObjectDetectionModels;
  public onboarding: Onboarding;
  public oneToManyNatRules: OneToManyNatRules;
  public oneToOneNatRules: OneToOneNatRules;
  public openapiSpec: OpenapiSpec;
  public order: Order;
  public organizations: Organizations;
  public ospf: Ospf;
  public overview: Overview;
  public packets: Packets;
  public performance: Performance;
  public performanceHistory: PerformanceHistory;
  public pii: Pii;
  public piiKeys: PiiKeys;
  public policy: Policy;
  public portForwardingRules: PortForwardingRules;
  public portSchedules: PortSchedules;
  public ports: Ports;
  public priorities: Priorities;
  public profiles: Profiles;
  public qosRules: QosRules;
  public qualityAndRetention: QualityAndRetention;
  public qualityRetentionProfiles: QualityRetentionProfiles;
  public radio: Radio;
  public recent: Recent;
  public rendezvousPoints: RendezvousPoints;
  public requests: Requests;
  public restrictions: Restrictions;
  public rfProfiles: RfProfiles;
  public rollbacks: Rollbacks;
  public routing: Routing;
  public rules: Rules;
  public saml: Saml;
  public samlRoles: SamlRoles;
  public schedules: Schedules;
  public security: Security;
  public securityCenters: SecurityCenters;
  public sense: Sense;
  public settings: Settings;
  public signalQualityHistory: SignalQualityHistory;
  public singleLan: SingleLan;
  public siteToSiteVpn: SiteToSiteVpn;
  public sm: Sm;
  public smDevicesForKey: SmDevicesForKey;
  public smOwnersForKey: SmOwnersForKey;
  public snmp: Snmp;
  public softwares: Softwares;
  public splash: Splash;
  public splashAuthorizationStatus: SplashAuthorizationStatus;
  public splashLoginAttempts: SplashLoginAttempts;
  public ssids: Ssids;
  public stacks: Stacks;
  public staticRoutes: StaticRoutes;
  public stats: Stats;
  public status: Status;
  public statuses: Statuses;
  public stormControl: StormControl;
  public stp: Stp;
  public subnetPool: SubnetPool;
  public subnets: Subnets;
  public switch: Switch;
  public syslogServers: SyslogServers;
  public targetGroups: TargetGroups;
  public thirdPartyVpnPeers: ThirdPartyVpnPeers;
  public traffic: Traffic;
  public trafficAnalysis: TrafficAnalysis;
  public trafficHistory: TrafficHistory;
  public trafficShaping: TrafficShaping;
  public uplink: Uplink;
  public uplinkBandwidth: UplinkBandwidth;
  public uplinkSelection: UplinkSelection;
  public uplinks: Uplinks;
  public uplinksLossAndLatency: UplinksLossAndLatency;
  public usageHistories: UsageHistories;
  public usageHistory: UsageHistory;
  public userAccessDevices: UserAccessDevices;
  public users: Users;
  public video: Video;
  public videoLink: VideoLink;
  public vlans: Vlans;
  public vpn: Vpn;
  public vpnFirewallRules: VpnFirewallRules;
  public vppAccounts: VppAccounts;
  public warmSpare: WarmSpare;
  public webhookTests: WebhookTests;
  public webhooks: Webhooks;
  public wireless: Wireless;
  public wirelessProfiles: WirelessProfiles;
  public wlanLists: WlanLists;
  public zones: Zones;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: SecurityModel;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
    this.accessControlLists = new AccessControlLists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accessPolicies = new AccessPolicies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.acls = new Acls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.actionBatches = new ActionBatches(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.adaptivePolicy = new AdaptivePolicy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.admins = new Admins(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.airMarshal = new AirMarshal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.alertTypes = new AlertTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.alerts = new Alerts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.alternateManagementInterface = new AlternateManagementInterface(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.analytics = new Analytics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.apiRequests = new ApiRequests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.apnsCert = new ApnsCert(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.appliance = new Appliance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applicationCategories = new ApplicationCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applicationUsage = new ApplicationUsage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.applications = new Applications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bgp = new Bgp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billing = new Billing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bluetooth = new Bluetooth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bluetoothClients = new BluetoothClients(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bonjourForwarding = new BonjourForwarding(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.brandingPolicies = new BrandingPolicies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bypassActivationLockAttempts = new BypassActivationLockAttempts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.camera = new Camera(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.categories = new Categories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cellularFirewallRules = new CellularFirewallRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cellularGateway = new CellularGateway(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cellularUsageHistory = new CellularUsageHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.certs = new Certs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelUtilization = new ChannelUtilization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channelUtilizationHistory = new ChannelUtilizationHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.clientCountHistory = new ClientCountHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.clients = new Clients(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.configTemplates = new ConfigTemplates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.configurationChanges = new ConfigurationChanges(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.configure = new Configure(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connectionStats = new ConnectionStats(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connectivity = new Connectivity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connectivityEvents = new ConnectivityEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connectivityMonitoringDestinations = new ConnectivityMonitoringDestinations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contentFiltering = new ContentFiltering(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customPerformanceClasses = new CustomPerformanceClasses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataRateHistory = new DataRateHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.desktopLogs = new DesktopLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deviceCommandLogs = new DeviceCommandLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deviceProfiles = new DeviceProfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.deviceTypeGroupPolicies = new DeviceTypeGroupPolicies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.devices = new Devices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dhcp = new Dhcp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dhcpServerPolicy = new DhcpServerPolicy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dscpTaggingOptions = new DscpTaggingOptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dscpToCosMappings = new DscpToCosMappings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eapOverride = new EapOverride(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eventTypes = new EventTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.events = new Events(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.failedConnections = new FailedConnections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fields = new Fields(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.firewall = new Firewall(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.firewalledServices = new FirewalledServices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.firmwareUpgrades = new FirmwareUpgrades(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.floorPlans = new FloorPlans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.groupPolicies = new GroupPolicies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.healthByTime = new HealthByTime(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.history = new History(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.hotspot20 = new Hotspot20(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.httpServers = new HttpServers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.identityPsks = new IdentityPsks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.idps = new Idps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.inboundFirewallRules = new InboundFirewallRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.insight = new Insight(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.interfaces = new Interfaces(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.intrusion = new Intrusion(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.inventoryDevices = new InventoryDevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.l3FirewallRules = new L3FirewallRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.l7FirewallRules = new L7FirewallRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.lan = new Lan(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.latencyHistory = new LatencyHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.latencyStats = new LatencyStats(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.licenses = new Licenses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.linkAggregations = new LinkAggregations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.live = new Live(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.liveTools = new LiveTools(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.lldpCdp = new LldpCdp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.loginSecurity = new LoginSecurity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.logs = new Logs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.lossAndLatencyHistory = new LossAndLatencyHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.malware = new Malware(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.managementInterface = new ManagementInterface(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.merakiAuthUsers = new MerakiAuthUsers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.meshStatuses = new MeshStatuses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.monitor = new Monitor(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.monitoredMediaServers = new MonitoredMediaServers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mqttBrokers = new MqttBrokers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mtu = new Mtu(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.multicast = new Multicast(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.netflow = new Netflow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.networkAdapters = new NetworkAdapters(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.networkHealth = new NetworkHealth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.networks = new Networks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.objectDetectionModels = new ObjectDetectionModels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.onboarding = new Onboarding(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oneToManyNatRules = new OneToManyNatRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oneToOneNatRules = new OneToOneNatRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.openapiSpec = new OpenapiSpec(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.order = new Order(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.organizations = new Organizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ospf = new Ospf(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.overview = new Overview(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.packets = new Packets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.performance = new Performance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.performanceHistory = new PerformanceHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pii = new Pii(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.piiKeys = new PiiKeys(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.policy = new Policy(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portForwardingRules = new PortForwardingRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.portSchedules = new PortSchedules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ports = new Ports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.priorities = new Priorities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.profiles = new Profiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.qosRules = new QosRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.qualityAndRetention = new QualityAndRetention(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.qualityRetentionProfiles = new QualityRetentionProfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.radio = new Radio(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.recent = new Recent(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rendezvousPoints = new RendezvousPoints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.requests = new Requests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.restrictions = new Restrictions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rfProfiles = new RfProfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rollbacks = new Rollbacks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.routing = new Routing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rules = new Rules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.saml = new Saml(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.samlRoles = new SamlRoles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.schedules = new Schedules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.security = new Security(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.securityCenters = new SecurityCenters(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sense = new Sense(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settings = new Settings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.signalQualityHistory = new SignalQualityHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.singleLan = new SingleLan(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.siteToSiteVpn = new SiteToSiteVpn(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sm = new Sm(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.smDevicesForKey = new SmDevicesForKey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.smOwnersForKey = new SmOwnersForKey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.snmp = new Snmp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.softwares = new Softwares(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.splash = new Splash(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.splashAuthorizationStatus = new SplashAuthorizationStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.splashLoginAttempts = new SplashLoginAttempts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ssids = new Ssids(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stacks = new Stacks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.staticRoutes = new StaticRoutes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stats = new Stats(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.status = new Status(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.statuses = new Statuses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stormControl = new StormControl(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.stp = new Stp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subnetPool = new SubnetPool(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subnets = new Subnets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.switch = new Switch(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.syslogServers = new SyslogServers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.targetGroups = new TargetGroups(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.thirdPartyVpnPeers = new ThirdPartyVpnPeers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.traffic = new Traffic(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trafficAnalysis = new TrafficAnalysis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trafficHistory = new TrafficHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trafficShaping = new TrafficShaping(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uplink = new Uplink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uplinkBandwidth = new UplinkBandwidth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uplinkSelection = new UplinkSelection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uplinks = new Uplinks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uplinksLossAndLatency = new UplinksLossAndLatency(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.usageHistories = new UsageHistories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.usageHistory = new UsageHistory(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userAccessDevices = new UserAccessDevices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.video = new Video(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.videoLink = new VideoLink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vlans = new Vlans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vpn = new Vpn(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vpnFirewallRules = new VpnFirewallRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vppAccounts = new VppAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.warmSpare = new WarmSpare(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhookTests = new WebhookTests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wireless = new Wireless(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wirelessProfiles = new WirelessProfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wlanLists = new WlanLists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.zones = new Zones(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
