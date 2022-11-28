from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidEapOverridePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey:
    r"""UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey
    EAPOL Key settings.
    """
    
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout_in_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInMs') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity:
    r"""UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity
    EAP settings for identity requests.
    """
    
    retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retries') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequestBody:
    eapol_key: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eapolKey') }})
    identity: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    max_retries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetries') }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    

@dataclass
class UpdateNetworkWirelessSsidEapOverrideRequest:
    path_params: UpdateNetworkWirelessSsidEapOverridePathParams = field()
    request: Optional[UpdateNetworkWirelessSsidEapOverrideRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidEapOverrideResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_eap_override_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
