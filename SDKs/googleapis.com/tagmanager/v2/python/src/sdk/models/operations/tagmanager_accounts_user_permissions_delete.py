from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class TagmanagerAccountsUserPermissionsDeletePathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    
class TagmanagerAccountsUserPermissionsDeleteTypeEnum(str, Enum):
    BUILT_IN_VARIABLE_TYPE_UNSPECIFIED = "builtInVariableTypeUnspecified"
    PAGE_URL = "pageUrl"
    PAGE_HOSTNAME = "pageHostname"
    PAGE_PATH = "pagePath"
    REFERRER = "referrer"
    EVENT = "event"
    CLICK_ELEMENT = "clickElement"
    CLICK_CLASSES = "clickClasses"
    CLICK_ID = "clickId"
    CLICK_TARGET = "clickTarget"
    CLICK_URL = "clickUrl"
    CLICK_TEXT = "clickText"
    FIRST_PARTY_SERVING_URL = "firstPartyServingUrl"
    FORM_ELEMENT = "formElement"
    FORM_CLASSES = "formClasses"
    FORM_ID = "formId"
    FORM_TARGET = "formTarget"
    FORM_URL = "formUrl"
    FORM_TEXT = "formText"
    ERROR_MESSAGE = "errorMessage"
    ERROR_URL = "errorUrl"
    ERROR_LINE = "errorLine"
    NEW_HISTORY_URL = "newHistoryUrl"
    OLD_HISTORY_URL = "oldHistoryUrl"
    NEW_HISTORY_FRAGMENT = "newHistoryFragment"
    OLD_HISTORY_FRAGMENT = "oldHistoryFragment"
    NEW_HISTORY_STATE = "newHistoryState"
    OLD_HISTORY_STATE = "oldHistoryState"
    HISTORY_SOURCE = "historySource"
    CONTAINER_VERSION = "containerVersion"
    DEBUG_MODE = "debugMode"
    RANDOM_NUMBER = "randomNumber"
    CONTAINER_ID = "containerId"
    APP_ID = "appId"
    APP_NAME = "appName"
    APP_VERSION_CODE = "appVersionCode"
    APP_VERSION_NAME = "appVersionName"
    LANGUAGE = "language"
    OS_VERSION = "osVersion"
    PLATFORM = "platform"
    SDK_VERSION = "sdkVersion"
    DEVICE_NAME = "deviceName"
    RESOLUTION = "resolution"
    ADVERTISER_ID = "advertiserId"
    ADVERTISING_TRACKING_ENABLED = "advertisingTrackingEnabled"
    HTML_ID = "htmlId"
    ENVIRONMENT_NAME = "environmentName"
    AMP_BROWSER_LANGUAGE = "ampBrowserLanguage"
    AMP_CANONICAL_PATH = "ampCanonicalPath"
    AMP_CANONICAL_URL = "ampCanonicalUrl"
    AMP_CANONICAL_HOST = "ampCanonicalHost"
    AMP_REFERRER = "ampReferrer"
    AMP_TITLE = "ampTitle"
    AMP_CLIENT_ID = "ampClientId"
    AMP_CLIENT_TIMEZONE = "ampClientTimezone"
    AMP_CLIENT_TIMESTAMP = "ampClientTimestamp"
    AMP_CLIENT_SCREEN_WIDTH = "ampClientScreenWidth"
    AMP_CLIENT_SCREEN_HEIGHT = "ampClientScreenHeight"
    AMP_CLIENT_SCROLL_X = "ampClientScrollX"
    AMP_CLIENT_SCROLL_Y = "ampClientScrollY"
    AMP_CLIENT_MAX_SCROLL_X = "ampClientMaxScrollX"
    AMP_CLIENT_MAX_SCROLL_Y = "ampClientMaxScrollY"
    AMP_TOTAL_ENGAGED_TIME = "ampTotalEngagedTime"
    AMP_PAGE_VIEW_ID = "ampPageViewId"
    AMP_PAGE_LOAD_TIME = "ampPageLoadTime"
    AMP_PAGE_DOWNLOAD_TIME = "ampPageDownloadTime"
    AMP_GTM_EVENT = "ampGtmEvent"
    EVENT_NAME = "eventName"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN = "firebaseEventParameterCampaign"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_ACLID = "firebaseEventParameterCampaignAclid"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_ANID = "firebaseEventParameterCampaignAnid"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_CLICK_TIMESTAMP = "firebaseEventParameterCampaignClickTimestamp"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_CONTENT = "firebaseEventParameterCampaignContent"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_CP1 = "firebaseEventParameterCampaignCp1"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_GCLID = "firebaseEventParameterCampaignGclid"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_SOURCE = "firebaseEventParameterCampaignSource"
    FIREBASE_EVENT_PARAMETER_CAMPAIGN_TERM = "firebaseEventParameterCampaignTerm"
    FIREBASE_EVENT_PARAMETER_CURRENCY = "firebaseEventParameterCurrency"
    FIREBASE_EVENT_PARAMETER_DYNAMIC_LINK_ACCEPT_TIME = "firebaseEventParameterDynamicLinkAcceptTime"
    FIREBASE_EVENT_PARAMETER_DYNAMIC_LINK_LINKID = "firebaseEventParameterDynamicLinkLinkid"
    FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_DEVICE_TIME = "firebaseEventParameterNotificationMessageDeviceTime"
    FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_ID = "firebaseEventParameterNotificationMessageId"
    FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_NAME = "firebaseEventParameterNotificationMessageName"
    FIREBASE_EVENT_PARAMETER_NOTIFICATION_MESSAGE_TIME = "firebaseEventParameterNotificationMessageTime"
    FIREBASE_EVENT_PARAMETER_NOTIFICATION_TOPIC = "firebaseEventParameterNotificationTopic"
    FIREBASE_EVENT_PARAMETER_PREVIOUS_APP_VERSION = "firebaseEventParameterPreviousAppVersion"
    FIREBASE_EVENT_PARAMETER_PREVIOUS_OS_VERSION = "firebaseEventParameterPreviousOsVersion"
    FIREBASE_EVENT_PARAMETER_PRICE = "firebaseEventParameterPrice"
    FIREBASE_EVENT_PARAMETER_PRODUCT_ID = "firebaseEventParameterProductId"
    FIREBASE_EVENT_PARAMETER_QUANTITY = "firebaseEventParameterQuantity"
    FIREBASE_EVENT_PARAMETER_VALUE = "firebaseEventParameterValue"
    VIDEO_PROVIDER = "videoProvider"
    VIDEO_URL = "videoUrl"
    VIDEO_TITLE = "videoTitle"
    VIDEO_DURATION = "videoDuration"
    VIDEO_PERCENT = "videoPercent"
    VIDEO_VISIBLE = "videoVisible"
    VIDEO_STATUS = "videoStatus"
    VIDEO_CURRENT_TIME = "videoCurrentTime"
    SCROLL_DEPTH_THRESHOLD = "scrollDepthThreshold"
    SCROLL_DEPTH_UNITS = "scrollDepthUnits"
    SCROLL_DEPTH_DIRECTION = "scrollDepthDirection"
    ELEMENT_VISIBILITY_RATIO = "elementVisibilityRatio"
    ELEMENT_VISIBILITY_TIME = "elementVisibilityTime"
    ELEMENT_VISIBILITY_FIRST_TIME = "elementVisibilityFirstTime"
    ELEMENT_VISIBILITY_RECENT_TIME = "elementVisibilityRecentTime"
    REQUEST_PATH = "requestPath"
    REQUEST_METHOD = "requestMethod"
    CLIENT_NAME = "clientName"
    QUERY_STRING = "queryString"
    SERVER_PAGE_LOCATION_URL = "serverPageLocationUrl"
    SERVER_PAGE_LOCATION_PATH = "serverPageLocationPath"
    SERVER_PAGE_LOCATION_HOSTNAME = "serverPageLocationHostname"


@dataclass
class TagmanagerAccountsUserPermissionsDeleteQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    type: Optional[List[TagmanagerAccountsUserPermissionsDeleteTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class TagmanagerAccountsUserPermissionsDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TagmanagerAccountsUserPermissionsDeleteRequest:
    path_params: TagmanagerAccountsUserPermissionsDeletePathParams = field(default=None)
    query_params: TagmanagerAccountsUserPermissionsDeleteQueryParams = field(default=None)
    security: TagmanagerAccountsUserPermissionsDeleteSecurity = field(default=None)
    

@dataclass
class TagmanagerAccountsUserPermissionsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
