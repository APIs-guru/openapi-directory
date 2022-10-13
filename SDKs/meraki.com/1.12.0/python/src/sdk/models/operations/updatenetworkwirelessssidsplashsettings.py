from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidSplashSettingsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess:
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInMinutes' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling:
    free_access: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeAccess' }})
    prepaid_access_fast_login_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prepaidAccessFastLoginEnabled' }})
    reply_to_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyToEmailAddress' }})
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum(str, Enum):
    OPEN = "open"
    RESTRICTED = "restricted"
    DEFAULT = "default"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship:
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInMinutes' }})
    guest_can_request_timeframe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestCanRequestTimeframe' }})
    
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum(str, Enum):
    FOCUSED = "focused"
    CLICK_THROUGH = "click-through"
    STRICT = "strict"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment:
    enforced_systems: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcedSystems' }})
    strength: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strength' }})
    systems_manager_network: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemsManagerNetwork' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage:
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo:
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront:
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequestBody:
    allow_simultaneous_logins: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSimultaneousLogins' }})
    billing: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing' }})
    block_all_traffic_before_sign_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockAllTrafficBeforeSignOn' }})
    controller_disconnection_behavior: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controllerDisconnectionBehavior' }})
    guest_sponsorship: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'guestSponsorship' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUrl' }})
    sentry_enrollment: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentryEnrollment' }})
    splash_image: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashImage' }})
    splash_logo: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashLogo' }})
    splash_prepaid_front: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashPrepaidFront' }})
    splash_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashTimeout' }})
    splash_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splashUrl' }})
    use_redirect_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useRedirectUrl' }})
    use_splash_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useSplashUrl' }})
    welcome_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'welcomeMessage' }})
    

@dataclass
class UpdateNetworkWirelessSsidSplashSettingsRequest:
    path_params: UpdateNetworkWirelessSsidSplashSettingsPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidSplashSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidSplashSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_splash_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
