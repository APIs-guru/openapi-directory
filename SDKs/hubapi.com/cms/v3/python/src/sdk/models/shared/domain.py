from dataclasses import dataclass, field
from typing import Any,Enum,List
from dataclasses_json import dataclass_json
from . import domaincdnconfig
from . import domainsetupinfo

class DomainApexResolutionStatusEnum(str, Enum):
    INELIGIBLE = "INELIGIBLE"
    SUGGEST_RESOLVING = "SUGGEST_RESOLVING"
    ALREADY_RESOLVING = "ALREADY_RESOLVING"
    ERROR = "ERROR"

class DomainCosObjectTypeEnum(str, Enum):
    CONTENT = "CONTENT"
    EXTENSION_RESOURCE = "EXTENSION_RESOURCE"
    LAYOUT = "LAYOUT"
    CUSTOM_WIDGET = "CUSTOM_WIDGET"
    WIDGET = "WIDGET"
    FORM = "FORM"
    PLACEMENT = "PLACEMENT"
    IMAGE = "IMAGE"
    DOMAIN_SETTINGS = "DOMAIN_SETTINGS"
    SITE_SETTINGS = "SITE_SETTINGS"
    EMAIL_ADDRESS = "EMAIL_ADDRESS"
    WORKFLOW = "WORKFLOW"
    HUBDB_TABLE = "HUBDB_TABLE"
    REDIRECT_URL = "REDIRECT_URL"
    DESIGN_FOLDER = "DESIGN_FOLDER"
    SITE_MAP = "SITE_MAP"
    DOMAIN = "DOMAIN"
    BLOG = "BLOG"
    FILE = "FILE"
    FOLDER = "FOLDER"
    SITE_MENU = "SITE_MENU"
    THEME = "THEME"
    CONTENT_GROUP = "CONTENT_GROUP"
    FOLLOW_ME = "FOLLOW_ME"
    KNOWLEDGE_BASE = "KNOWLEDGE_BASE"
    LIST_MEMBERSHIP = "LIST_MEMBERSHIP"
    CONTACT_MEMBERSHIP = "CONTACT_MEMBERSHIP"
    PASSWORD_PROTECTED = "PASSWORD_PROTECTED"
    UNRESTRICTED_ACCESS = "UNRESTRICTED_ACCESS"
    MARKETPLACE_LISTING = "MARKETPLACE_LISTING"
    LAYOUT_SECTION = "LAYOUT_SECTION"
    THEME_SETTINGS = "THEME_SETTINGS"
    VIDEO_PLAYER = "VIDEO_PLAYER"
    URL_MAPPING = "URL_MAPPING"
    KNOWLEDGE_CATEGORY = "KNOWLEDGE_CATEGORY"
    KNOWLEDGE_HOMEPAGE_CATEGORY = "KNOWLEDGE_HOMEPAGE_CATEGORY"
    RAW_ASSET = "RAW_ASSET"
    GLOBAL_CONTENT = "GLOBAL_CONTENT"
    HUBDB_TABLE_ROW = "HUBDB_TABLE_ROW"
    BLOG_AUTHOR = "BLOG_AUTHOR"
    SERVERLESS_FUNCTION = "SERVERLESS_FUNCTION"
    KNOWLEDGE_CATEGORY_TRANSLATION = "KNOWLEDGE_CATEGORY_TRANSLATION"


@dataclass_json
@dataclass
class Domain:
    actual_cname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actualCname' }})
    actual_ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actualIp' }})
    apex_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apexDomain' }})
    apex_ip_addresses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apexIpAddresses' }})
    apex_resolution_status: DomainApexResolutionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apexResolutionStatus' }})
    author_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorAt' }})
    brand_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandId' }})
    cdn_purge_embargo_time: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdnPurgeEmbargoTime' }})
    certificate_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    consecutive_non_resolving_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consecutiveNonResolvingCount' }})
    correct_cname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctCname' }})
    cos_object_type: DomainCosObjectTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cosObjectType' }})
    created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    created_by_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdById' }})
    deletable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletable' }})
    derived_brand_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'derivedBrandName' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    domain_cdn_config: domaincdnconfig.DomainCdnConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainCdnConfig' }})
    full_category_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullCategoryKey' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_any_primary: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAnyPrimary' }})
    is_dns_correct: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDnsCorrect' }})
    is_internal_domain: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInternalDomain' }})
    is_legacy: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLegacy' }})
    is_legacy_domain: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLegacyDomain' }})
    is_resolving: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isResolving' }})
    is_resolving_ignoring_manually_marked_as_resolving: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isResolvingIgnoringManuallyMarkedAsResolving' }})
    is_resolving_internal_property: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isResolvingInternalProperty' }})
    is_setup_complete: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSetupComplete' }})
    is_ssl_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSslEnabled' }})
    is_ssl_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSslOnly' }})
    is_staging_domain: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStagingDomain' }})
    is_used_for_any_content_type: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsedForAnyContentType' }})
    is_used_for_blog_post: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsedForBlogPost' }})
    is_used_for_email: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsedForEmail' }})
    is_used_for_knowledge: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsedForKnowledge' }})
    is_used_for_landing_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsedForLandingPage' }})
    is_used_for_site_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isUsedForSitePage' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    manually_marked_as_resolving: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manuallyMarkedAsResolving' }})
    portal_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portalId' }})
    primary_blog: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryBlog' }})
    primary_blog_post: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryBlogPost' }})
    primary_click_tracking: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryClickTracking' }})
    primary_email: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryEmail' }})
    primary_knowledge: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryKnowledge' }})
    primary_landing_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryLandingPage' }})
    primary_legacy_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryLegacyPage' }})
    primary_site_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primarySitePage' }})
    public_suffix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicSuffix' }})
    secondary_to_domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryToDomain' }})
    set_up_language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setUpLanguage' }})
    setup_info: domainsetupinfo.DomainSetupInfo = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setupInfo' }})
    setup_task_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setupTaskId' }})
    site_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteId' }})
    ssl_cname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCname' }})
    ssl_request_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslRequestId' }})
    team_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamIds' }})
    updated: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    updated_by_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedById' }})
    
