from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkAlertsSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations:
    all_admins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allAdmins' }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    http_server_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpServerIds' }})
    snmp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBodyAlerts:
    alert_destinations: Optional[UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertDestinations' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    filters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations:
    all_admins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allAdmins' }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    http_server_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpServerIds' }})
    snmp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp' }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBody:
    alerts: Optional[List[UpdateNetworkAlertsSettingsRequestBodyAlerts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alerts' }})
    default_destinations: Optional[UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultDestinations' }})
    

@dataclass
class UpdateNetworkAlertsSettingsRequest:
    path_params: UpdateNetworkAlertsSettingsPathParams = field(default=None)
    request: Optional[UpdateNetworkAlertsSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkAlertsSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_alerts_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
