from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateOrganizationBrandingPolicyPathParams:
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum(str, Enum):
    ALL_ORGANIZATION_ADMINS = "All organization admins"
    ALL_ENTERPRISE_ADMINS = "All enterprise admins"
    ALL_NETWORK_ADMINS = "All network admins"
    ALL_ADMINS_OF_NETWORKS_ = "All admins of networks..."
    ALL_ADMINS_OF_NETWORKS_TAGGED_ = "All admins of networks tagged..."
    SPECIFIC_ADMINS_ = "Specific admins..."
    ALL_ADMINS = "All admins"
    ALL_SAML_ADMINS = "All SAML admins"


@dataclass_json
@dataclass
class CreateOrganizationBrandingPolicyRequestBodyAdminSettings:
    r"""CreateOrganizationBrandingPolicyRequestBodyAdminSettings
    Settings for describing which kinds of admins this policy applies to.
    """
    
    applies_to: Optional[CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliesTo') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"


@dataclass_json
@dataclass
class CreateOrganizationBrandingPolicyRequestBodyHelpSettings:
    r"""CreateOrganizationBrandingPolicyRequestBodyHelpSettings
        Settings for describing the modifications to various Help page features. Each property in this object accepts one of
        'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
        the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
        Dashboard; see the documentation for each property to see the allowed values.
     Each property defaults to 'default or inherit' when not provided.
    """
    
    api_docs_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiDocsSubtab') }})
    cases_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casesSubtab') }})
    cisco_meraki_product_documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciscoMerakiProductDocumentation') }})
    community_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communitySubtab') }})
    data_protection_requests_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionRequestsSubtab') }})
    firewall_info_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewallInfoSubtab') }})
    get_help_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getHelpSubtab') }})
    get_help_subtab_knowledge_base_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getHelpSubtabKnowledgeBaseSearch') }})
    hardware_replacements_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardwareReplacementsSubtab') }})
    help_tab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpTab') }})
    new_features_subtab: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newFeaturesSubtab') }})
    sm_forums: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smForums') }})
    support_contact_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContactInfo') }})
    universal_search_knowledge_base_search: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalSearchKnowledgeBaseSearch') }})
    

@dataclass_json
@dataclass
class CreateOrganizationBrandingPolicyRequestBody:
    admin_settings: CreateOrganizationBrandingPolicyRequestBodyAdminSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminSettings') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    help_settings: Optional[CreateOrganizationBrandingPolicyRequestBodyHelpSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpSettings') }})
    

@dataclass
class CreateOrganizationBrandingPolicyRequest:
    path_params: CreateOrganizationBrandingPolicyPathParams = field()
    request: CreateOrganizationBrandingPolicyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrganizationBrandingPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    create_organization_branding_policy_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
