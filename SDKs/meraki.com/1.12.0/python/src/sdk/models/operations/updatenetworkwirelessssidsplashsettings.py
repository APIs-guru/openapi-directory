from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidSplashSettingsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
    Details associated with a free access plan with limits.
    """
    
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInMinutes') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling
    Details associated with billing splash.
    """
    
    free_access: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeAccess') }})
    prepaid_access_fast_login_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidAccessFastLoginEnabled') }})
    reply_to_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmailAddress') }})
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum(str, Enum):
    OPEN = "open"
    RESTRICTED = "restricted"
    DEFAULT = "default"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship
    Details associated with guest sponsored splash.
    """
    
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInMinutes') }})
    guest_can_request_timeframe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestCanRequestTimeframe') }})
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum(str, Enum):
    FOCUSED = "focused"
    CLICK_THROUGH = "click-through"
    STRICT = "strict"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork
    Systems Manager network targeted for sentry enrollment.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment
    Systems Manager sentry enrollment splash settings.
    """
    
    enforced_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforcedSystems') }})
    strength: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strength') }})
    systems_manager_network: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemsManagerNetwork') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage
    The image used in the splash page.
    """
    
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo
    The logo used in the splash page.
    """
    
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront:
    r"""UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront
    The prepaid front image used in the splash page.
    """
    
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBody:
    allow_simultaneous_logins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSimultaneousLogins') }})
    billing: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing') }})
    block_all_traffic_before_sign_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockAllTrafficBeforeSignOn') }})
    controller_disconnection_behavior: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controllerDisconnectionBehavior') }})
    guest_sponsorship: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestSponsorship') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectUrl') }})
    sentry_enrollment: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentryEnrollment') }})
    splash_image: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashImage') }})
    splash_logo: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashLogo') }})
    splash_prepaid_front: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashPrepaidFront') }})
    splash_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashTimeout') }})
    splash_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splashUrl') }})
    use_redirect_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useRedirectUrl') }})
    use_splash_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useSplashUrl') }})
    welcome_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('welcomeMessage') }})
    

@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequest:
    path_params: UpdateNetworkWirelessSsidSplashSettingsPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidSplashSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_splash_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
