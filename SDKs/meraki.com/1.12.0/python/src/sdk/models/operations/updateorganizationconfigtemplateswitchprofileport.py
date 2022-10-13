from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortPathParams:
    config_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'configTemplateId', 'style': 'simple', 'explode': False }})
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    port_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'profileId', 'style': 'simple', 'explode': False }})
    
class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum(str, Enum):
    OPEN = "Open"
    CUSTOM_ACCESS_POLICY = "Custom access policy"
    MAC_ALLOW_LIST = "MAC allow list"
    STICKY_MAC_ALLOW_LIST = "Sticky MAC allow list"

class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum(str, Enum):
    DISABLED = "disabled"
    ROOT_GUARD = "root guard"
    BPDU_GUARD = "bpdu guard"
    LOOP_GUARD = "loop guard"

class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum(str, Enum):
    TRUNK = "trunk"
    ACCESS = "access"

class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum(str, Enum):
    ALERT_ONLY = "Alert only"
    ENFORCE = "Enforce"


@dataclass_json
@dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody:
    access_policy_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyNumber' }})
    access_policy_type: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyType' }})
    allowed_vlans: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedVlans' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    flexible_stacking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flexibleStackingEnabled' }})
    isolation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isolationEnabled' }})
    link_negotiation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkNegotiation' }})
    mac_allow_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macAllowList' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    poe_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poeEnabled' }})
    port_schedule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portScheduleId' }})
    rstp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rstpEnabled' }})
    sticky_mac_allow_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stickyMacAllowList' }})
    sticky_mac_allow_list_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stickyMacAllowListLimit' }})
    storm_control_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stormControlEnabled' }})
    stp_guard: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stpGuard' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    udld: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'udld' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    voice_vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voiceVlan' }})
    

@dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortRequest:
    path_params: UpdateOrganizationConfigTemplateSwitchProfilePortPathParams = field(default=None)
    request: Optional[UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOrganizationConfigTemplateSwitchProfilePortResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_organization_config_template_switch_profile_port_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
