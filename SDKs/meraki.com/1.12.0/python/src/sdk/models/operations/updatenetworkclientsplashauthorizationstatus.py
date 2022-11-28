from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkClientSplashAuthorizationStatusPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0
    Splash authorization for SSID 0
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1
    Splash authorization for SSID 1
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10
    Splash authorization for SSID 10
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11
    Splash authorization for SSID 11
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12
    Splash authorization for SSID 12
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13
    Splash authorization for SSID 13
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14
    Splash authorization for SSID 14
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2
    Splash authorization for SSID 2
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3
    Splash authorization for SSID 3
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4
    Splash authorization for SSID 4
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5
    Splash authorization for SSID 5
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6
    Splash authorization for SSID 6
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7
    Splash authorization for SSID 7
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8
    Splash authorization for SSID 8
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9
    Splash authorization for SSID 9
    """
    
    is_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAuthorized') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids:
    r"""UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids
    The target SSIDs. Each SSID must be enabled and must have Click-through splash enabled. For each SSID where isAuthorized is true, the expiration time will automatically be set according to the SSID's splash frequency. Not all networks support configuring all SSIDs
    """
    
    zero: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('0') }})
    one: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('1') }})
    ten: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('10') }})
    eleven: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('11') }})
    twelve: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('12') }})
    thirteen: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('13') }})
    fourteen: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('14') }})
    two: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('2') }})
    three: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('3') }})
    four: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('4') }})
    five: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('5') }})
    six: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('6') }})
    seven: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('7') }})
    eight: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('8') }})
    nine: Optional[UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('9') }})
    

@dataclass_json
@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequestBody:
    ssids: UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssids') }})
    

@dataclass
class UpdateNetworkClientSplashAuthorizationStatusRequest:
    path_params: UpdateNetworkClientSplashAuthorizationStatusPathParams = field()
    request: UpdateNetworkClientSplashAuthorizationStatusRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkClientSplashAuthorizationStatusResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_client_splash_authorization_status_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
