from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkAlertsSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations:
    r"""UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations
    A hash of destinations for this specific alert
    """
    
    all_admins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allAdmins') }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    http_server_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpServerIds') }})
    snmp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBodyAlerts:
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    alert_destinations: Optional[UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertDestinations') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    filters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations:
    r"""UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations
    The network-wide destinations for all alerts on the network.
    """
    
    all_admins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allAdmins') }})
    emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    http_server_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpServerIds') }})
    snmp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp') }})
    

@dataclass_json
@dataclass
class UpdateNetworkAlertsSettingsRequestBody:
    alerts: Optional[List[UpdateNetworkAlertsSettingsRequestBodyAlerts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    default_destinations: Optional[UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultDestinations') }})
    

@dataclass
class UpdateNetworkAlertsSettingsRequest:
    path_params: UpdateNetworkAlertsSettingsPathParams = field()
    request: Optional[UpdateNetworkAlertsSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkAlertsSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_alerts_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
