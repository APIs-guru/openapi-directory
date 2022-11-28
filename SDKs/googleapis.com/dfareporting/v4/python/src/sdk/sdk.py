
__doc__ = """ SDK Documentation: https://developers.google.com/doubleclick-advertisers/"""
import requests

from . import utils

from .accountactiveadsummaries import AccountActiveAdSummaries
from .accountpermissiongroups import AccountPermissionGroups
from .accountpermissions import AccountPermissions
from .accountuserprofiles import AccountUserProfiles
from .accounts import Accounts
from .ads import Ads
from .advertisergroups import AdvertiserGroups
from .advertiserinvoices import AdvertiserInvoices
from .advertiserlandingpages import AdvertiserLandingPages
from .advertisers import Advertisers
from .billingassignments import BillingAssignments
from .billingprofiles import BillingProfiles
from .billingrates import BillingRates
from .browsers import Browsers
from .campaigncreativeassociations import CampaignCreativeAssociations
from .campaigns import Campaigns
from .changelogs import ChangeLogs
from .cities import Cities
from .connectiontypes import ConnectionTypes
from .contentcategories import ContentCategories
from .conversions import Conversions
from .countries import Countries
from .creativeassets import CreativeAssets
from .creativefieldvalues import CreativeFieldValues
from .creativefields import CreativeFields
from .creativegroups import CreativeGroups
from .creatives import Creatives
from .dimensionvalues import DimensionValues
from .directorysites import DirectorySites
from .dynamictargetingkeys import DynamicTargetingKeys
from .eventtags import EventTags
from .files import Files
from .floodlightactivities import FloodlightActivities
from .floodlightactivitygroups import FloodlightActivityGroups
from .floodlightconfigurations import FloodlightConfigurations
from .inventoryitems import InventoryItems
from .languages import Languages
from .metros import Metros
from .mobileapps import MobileApps
from .mobilecarriers import MobileCarriers
from .operatingsystemversions import OperatingSystemVersions
from .operatingsystems import OperatingSystems
from .orderdocuments import OrderDocuments
from .orders import Orders
from .placementgroups import PlacementGroups
from .placementstrategies import PlacementStrategies
from .placements import Placements
from .platformtypes import PlatformTypes
from .postalcodes import PostalCodes
from .projects import Projects
from .regions import Regions
from .remarketinglistshares import RemarketingListShares
from .remarketinglists import RemarketingLists
from .reports import Reports
from .sites import Sites
from .sizes import Sizes
from .subaccounts import Subaccounts
from .targetableremarketinglists import TargetableRemarketingLists
from .targetingtemplates import TargetingTemplates
from .userprofiles import UserProfiles
from .userrolepermissiongroups import UserRolePermissionGroups
from .userrolepermissions import UserRolePermissions
from .userroles import UserRoles
from .videoformats import VideoFormats


SERVERS = [
	"https://dfareporting.googleapis.com/dfareporting/v4",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/doubleclick-advertisers/"""
    account_active_ad_summaries: AccountActiveAdSummaries
    account_permission_groups: AccountPermissionGroups
    account_permissions: AccountPermissions
    account_user_profiles: AccountUserProfiles
    accounts: Accounts
    ads: Ads
    advertiser_groups: AdvertiserGroups
    advertiser_invoices: AdvertiserInvoices
    advertiser_landing_pages: AdvertiserLandingPages
    advertisers: Advertisers
    billing_assignments: BillingAssignments
    billing_profiles: BillingProfiles
    billing_rates: BillingRates
    browsers: Browsers
    campaign_creative_associations: CampaignCreativeAssociations
    campaigns: Campaigns
    change_logs: ChangeLogs
    cities: Cities
    connection_types: ConnectionTypes
    content_categories: ContentCategories
    conversions: Conversions
    countries: Countries
    creative_assets: CreativeAssets
    creative_field_values: CreativeFieldValues
    creative_fields: CreativeFields
    creative_groups: CreativeGroups
    creatives: Creatives
    dimension_values: DimensionValues
    directory_sites: DirectorySites
    dynamic_targeting_keys: DynamicTargetingKeys
    event_tags: EventTags
    files: Files
    floodlight_activities: FloodlightActivities
    floodlight_activity_groups: FloodlightActivityGroups
    floodlight_configurations: FloodlightConfigurations
    inventory_items: InventoryItems
    languages: Languages
    metros: Metros
    mobile_apps: MobileApps
    mobile_carriers: MobileCarriers
    operating_system_versions: OperatingSystemVersions
    operating_systems: OperatingSystems
    order_documents: OrderDocuments
    orders: Orders
    placement_groups: PlacementGroups
    placement_strategies: PlacementStrategies
    placements: Placements
    platform_types: PlatformTypes
    postal_codes: PostalCodes
    projects: Projects
    regions: Regions
    remarketing_list_shares: RemarketingListShares
    remarketing_lists: RemarketingLists
    reports: Reports
    sites: Sites
    sizes: Sizes
    subaccounts: Subaccounts
    targetable_remarketing_lists: TargetableRemarketingLists
    targeting_templates: TargetingTemplates
    user_profiles: UserProfiles
    user_role_permission_groups: UserRolePermissionGroups
    user_role_permissions: UserRolePermissions
    user_roles: UserRoles
    video_formats: VideoFormats

    _client: requests.Session
    _security_client: requests.Session
    
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
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.account_active_ad_summaries = AccountActiveAdSummaries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.account_permission_groups = AccountPermissionGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.account_permissions = AccountPermissions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.account_user_profiles = AccountUserProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.accounts = Accounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ads = Ads(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.advertiser_groups = AdvertiserGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.advertiser_invoices = AdvertiserInvoices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.advertiser_landing_pages = AdvertiserLandingPages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.advertisers = Advertisers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing_assignments = BillingAssignments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing_profiles = BillingProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing_rates = BillingRates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.browsers = Browsers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.campaign_creative_associations = CampaignCreativeAssociations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.campaigns = Campaigns(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.change_logs = ChangeLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cities = Cities(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.connection_types = ConnectionTypes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.content_categories = ContentCategories(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.conversions = Conversions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.countries = Countries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.creative_assets = CreativeAssets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.creative_field_values = CreativeFieldValues(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.creative_fields = CreativeFields(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.creative_groups = CreativeGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.creatives = Creatives(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dimension_values = DimensionValues(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.directory_sites = DirectorySites(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dynamic_targeting_keys = DynamicTargetingKeys(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.event_tags = EventTags(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.files = Files(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.floodlight_activities = FloodlightActivities(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.floodlight_activity_groups = FloodlightActivityGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.floodlight_configurations = FloodlightConfigurations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inventory_items = InventoryItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.languages = Languages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.metros = Metros(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mobile_apps = MobileApps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mobile_carriers = MobileCarriers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.operating_system_versions = OperatingSystemVersions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.operating_systems = OperatingSystems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.order_documents = OrderDocuments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orders = Orders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.placement_groups = PlacementGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.placement_strategies = PlacementStrategies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.placements = Placements(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.platform_types = PlatformTypes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.postal_codes = PostalCodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.projects = Projects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.regions = Regions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.remarketing_list_shares = RemarketingListShares(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.remarketing_lists = RemarketingLists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.reports = Reports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sites = Sites(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sizes = Sizes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.subaccounts = Subaccounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.targetable_remarketing_lists = TargetableRemarketingLists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.targeting_templates = TargetingTemplates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_profiles = UserProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_role_permission_groups = UserRolePermissionGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_role_permissions = UserRolePermissions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.user_roles = UserRoles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.video_formats = VideoFormats(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    