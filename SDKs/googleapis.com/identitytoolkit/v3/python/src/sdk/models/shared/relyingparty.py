from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Relyingparty:
    android_install_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidInstallApp' }})
    android_minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidMinimumVersion' }})
    android_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidPackageName' }})
    can_handle_code_in_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canHandleCodeInApp' }})
    captcha_resp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captchaResp' }})
    challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    continue_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueUrl' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    i_os_app_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iOSAppStoreId' }})
    i_os_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iOSBundleId' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    new_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newEmail' }})
    request_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestType' }})
    user_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIp' }})
    
