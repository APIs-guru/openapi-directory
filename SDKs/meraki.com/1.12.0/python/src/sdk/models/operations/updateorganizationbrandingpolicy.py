from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateOrganizationBrandingPolicyPathParams:
    branding_policy_id: str = field(metadata={'path_param': { 'field_name': 'brandingPolicyId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum(str, Enum):
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
class UpdateOrganizationBrandingPolicyRequestBodyAdminSettings:
    r"""UpdateOrganizationBrandingPolicyRequestBodyAdminSettings
    Settings for describing which kinds of admins this policy applies to.
    """
    
    applies_to: Optional[UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliesTo') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"

class UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum(str, Enum):
    DEFAULT_OR_INHERIT = "default or inherit"
    HIDE = "hide"
    SHOW = "show"


@dataclass_json
@dataclass
class UpdateOrganizationBrandingPolicyRequestBodyHelpSettings:
    r"""UpdateOrganizationBrandingPolicyRequestBodyHelpSettings
        Settings for describing the modifications to various Help page features. Each property in this object accepts one of
        'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
        the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
        Dashboard; see the documentation for each property to see the allowed values.
    
    """
    
    api_docs_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiDocsSubtab') }})
    cases_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casesSubtab') }})
    cisco_meraki_product_documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciscoMerakiProductDocumentation') }})
    community_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('communitySubtab') }})
    data_protection_requests_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionRequestsSubtab') }})
    firewall_info_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewallInfoSubtab') }})
    get_help_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getHelpSubtab') }})
    get_help_subtab_knowledge_base_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getHelpSubtabKnowledgeBaseSearch') }})
    hardware_replacements_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardwareReplacementsSubtab') }})
    help_tab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpTab') }})
    new_features_subtab: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newFeaturesSubtab') }})
    sm_forums: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smForums') }})
    support_contact_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContactInfo') }})
    universal_search_knowledge_base_search: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalSearchKnowledgeBaseSearch') }})
    

@dataclass_json
@dataclass
class UpdateOrganizationBrandingPolicyRequestBody:
    admin_settings: Optional[UpdateOrganizationBrandingPolicyRequestBodyAdminSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminSettings') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    help_settings: Optional[UpdateOrganizationBrandingPolicyRequestBodyHelpSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('helpSettings') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass
class UpdateOrganizationBrandingPolicyRequest:
    path_params: UpdateOrganizationBrandingPolicyPathParams = field()
    request: Optional[UpdateOrganizationBrandingPolicyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationBrandingPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    update_organization_branding_policy_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
